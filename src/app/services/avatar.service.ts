import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { avatarSvgList } from '../data/svgArray';
import { alienRaceList, imageParts, gender } from '../enums/avatar.enum';
import { avatarList } from '../interfaces/avatar.interface';
import { ColorHex, HairColor } from '../interfaces/color.interface';
import { ColorServicce } from './colors.service';
import { hairColorService } from './hair-color.service';
import { skinColorService } from './skin-color.service';

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
    private color: ColorServicce,
    private skinColor: skinColorService,
    private hairColor: hairColorService
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
    race: alienRaceList,
    gender: gender,
    era?: string
  ): avatarList[] {
    return avatarSvgList
      .filter((av) => av.tags.imagePart === part)
      .filter((av) => av.tags.race.includes(race))
      .filter((av) => av.tags.gender.includes(gender));
  }

  loadColor(part: string, race: alienRaceList, gender: gender) {
    if (part === 'skin') {
      return this.skinColor.getSkinColors(race);
    } else {
      return this.hairColor.getHairColor(race);
    }
  }

  loadInsignia(officer: boolean): Observable<string> {
    return this.http.get(`assets/avatar/insignia/insignia_all.svg`, {
      responseType: 'text',
    });
  }

  setColor(
    part: string,
    skinColor: ColorHex | undefined,
    hairColor?: HairColor
  ) {
    switch (part) {
      case 'skin':
        if (skinColor) this.color.setSkinColor(skinColor);
        break;
      case 'hair':
        if (hairColor) this.color.setHairColor(hairColor);
    }
  }

  /**
   * Load a selected svg from the assets folder
   * @param part selected part from the editor
   * @returns Observable of the loaded svg
   */
  loadPartBySelection(part: avatarList): Observable<string> {
    return this.http.get(
      `assets/avatar/${part.tags.imagePart.toLowerCase()}/${part.file}`,
      {
        responseType: 'text',
      }
    );
  }
}

export const idsSvg = {
  uniform: ['uniform_right', 'uniform_left'],
  skin: ['head', 'ear_left', 'ear_right', 'neck', 'antenna'],
  hair: [
    'hair',
    'hair_long',
    'hair_highlight',
    'hair_highlight_long',
    'hair_shade',
    'hair_shade_long',
    'eyebrows_left',
    'eyebrows_right',
  ],
};
