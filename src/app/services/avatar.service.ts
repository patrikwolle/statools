import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { avatarSvgList } from '../data/svgArray';
import { alienRaceList, imageParts, gender } from '../enums/avatar.enum';
import { avatarList } from '../interfaces/avatar.interface';
import { ColorHex } from '../interfaces/color.interface';
import { ColorServicce, pinkSkin } from './colors.service';
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
    private skinColor: skinColorService
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
      return [];
    }
  }

  loadInsignia(officer: boolean): Observable<string> {
    return this.http.get(`assets/avatar/insignia/insignia_all.svg`, {
      responseType: 'text',
    });
  }

  setColor(part: string, color: ColorHex) {
    switch (part) {
      case 'skin':
        this.color.setSkinColor(color);
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
