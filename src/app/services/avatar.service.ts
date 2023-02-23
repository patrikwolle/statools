import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { avatarSvgList } from '../data/svgArray';
import { alienSpeciesList, imageParts, gender } from '../enums/avatar.enum';
import { avatarList } from '../interfaces/avatar.interface';
import {
  Color,
  ColorHex,
  HairColor,
  SkinColor,
  EyeColor,
} from '../interfaces/color.interface';
import { ColorService } from './colors.service';
import { HairColorService } from './hair-color.service';
import { SkinColorService } from './skin-color.service';
import { EyeColorService } from './eye-color.service';

/**
 * Service that handels loading the svgs, and the svg-config file
 * @author patrikwolle
 */
@Injectable({
  providedIn: 'root',
})
export class AvatarService {
  constructor(
    private http: HttpClient,
    private color: ColorService,
    private skinColor: SkinColorService,
    private hairColor: HairColorService,
    private eyeColor: EyeColorService
  ) {}

  /**
   * Returns a specific part of the storage array, filtered by part, gender and optional era.
   * @param part Bodypart of the character
   * @param gender Gender of the character
   * @param era Uniform era
   * @returns an Array of all avatarList Elements matching the params
   */
  loadPart(
    part: imageParts,
    species: alienSpeciesList,
    gender: gender,
    era?: string
  ): avatarList[] {
    return avatarSvgList
      .filter((av) => av.tags.imagePart === part)
      .filter((av) => av.tags.species.includes(species))
      .filter((av) => av.tags.gender.includes(gender));
  }

  loadSkinColor(species: alienSpeciesList): ColorHex[] {
    return this.skinColor.getSkinColors(species);
  }

  loadHairColor(species: alienSpeciesList) {
    return this.hairColor.getHairColor(species);
  }

  loadInsignia(officer: number): Observable<string> {
    switch (officer) {
      case 0:
        return this.http.get(`assets/avatar/insignia/insignia_all.svg`, {
          responseType: 'text',
        });
        break;
      case 1:
        return this.http.get(`assets/avatar/insignia/insignia_all.svg`, {
          responseType: 'text',
        });
        break;
      case 2:
        return this.http.get(`assets/avatar/insignia/insignia_admiral.svg`, {
          responseType: 'text',
        });
        break;
      default:
        return this.http.get(`assets/avatar/insignia/insignia_all.svg`, {
          responseType: 'text',
        });
        break;
    }
  }

  loadEyeColor(species: alienSpeciesList) {
    return this.eyeColor.getEyeColor(species);
  }

  setColor(col: Color) {
    console.log('color', col);
    switch (col.kind) {
      case 'eyeColor':
        return this.color.setEyeColor(col);
      case 'hairColor':
        return this.color.setHairColor(col);
      case 'skinColor':
        return this.color.setSkinColor(col);
      default:
        console.debug('Color not defined');
    }
  }

  /**
   * Load a selected svg from the assets folder
   * @param part selected part from the editor
   * @returns Observable of the loaded svg or if the seletected Part is undefined, return an Observable of an empty string
   */
  loadPartBySelection(part: avatarList): Observable<string> {
    if (part) {
      return this.http.get(
        `assets/avatar/${part.tags.imagePart.toLowerCase()}/${part.file}`,
        {
          responseType: 'text',
        }
      );
    } else {
      return of<string>('');
    }
  }
}

export const idsSvg = {
  uniform: ['uniform_right', 'uniform_left'],
  skin: ['head', 'ears', 'neck', 'species_special'],
  hair: [
    'hair',
    'hair_long',
    'hair_highlight',
    'hair_highlight_long',
    'hair_shade',
    'hair_shade_long',
    'eyebrows',
    'beard',
    'unshaven',
  ],
  eyes: ['pupil_left', 'pupil_right'],
};
