import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { avatarSvgList } from '../data/svgArray';
import { alienRaceList, imageParts, gender } from '../enums/avatar.enum';
import { avatarList } from '../interfaces/avatar.interface';
import { ColorHex, HairColor, SkinColor } from '../interfaces/color.interface';
import { ColorService } from './colors.service';
import { hairColorService } from './hair-color.service';
import { SkinColorService } from './skin-color.service';

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

  loadSkinColor(race: alienRaceList): ColorHex[] {
    return this.skinColor.getSkinColors(race);
  }

  loadHairColor(race: alienRaceList) {
    return this.hairColor.getHairColor(race);
  }

  loadInsignia(officer: boolean): Observable<string> {
    return this.http.get(`assets/avatar/insignia/insignia_all.svg`, {
      responseType: 'text',
    });
  }

  setHairColor(hc: HairColor) {
    this.color.setHairColor(hc);
  }
  setSkinColor(sc: SkinColor, race: alienRaceList) {
    this.color.setSkinColor(sc, race);
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
  skin: ['head', 'ear_left', 'ear_right', 'neck', 'antenna', 'head_racial'],
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
