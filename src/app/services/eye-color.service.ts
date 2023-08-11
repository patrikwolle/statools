import { Injectable } from '@angular/core';
import { ColorHex, EyeColor } from '../interfaces/color.interface';
import { alienSpeciesList } from '../enums/avatar.enum';
import { bluePupil, greenPupil, normalEyeColors } from '../data/eye-colors';

/**
 * Service that handels loading eyeColors and managing eyeColors
 */
@Injectable({
  providedIn: 'root',
})
export class EyeColorService {
  getEyeColor(species: alienSpeciesList): EyeColor[] {
    switch (species) {
      case alienSpeciesList.andorian:
      case alienSpeciesList.benzite:
      case alienSpeciesList.betazoid:
      case alienSpeciesList.denobulan:
      case alienSpeciesList.bajoran:
      case alienSpeciesList.ferengi:
      case alienSpeciesList.grazerite:
      case alienSpeciesList.human:
      case alienSpeciesList.ktarian:
      case alienSpeciesList.klingon:
      case alienSpeciesList.romulan:
      case alienSpeciesList.tellarite:
      case alienSpeciesList.trill:
      case alienSpeciesList.vulcan: {
        return this.getSecondEyeColor(normalEyeColors);
      }
      case alienSpeciesList.efrosian:
      case alienSpeciesList.bolian: {
        return this.getSecondEyeColor(bluePupil);
      }
      case alienSpeciesList.orion: {
        return this.getSecondEyeColor(greenPupil);
      }
      default:
        throw new Error('Could not parse species');
    }
  }

  getSecondEyeColor(eyeColorArr: ColorHex[]): EyeColor[] {
    let eyeColors: EyeColor[] = [];
    eyeColorArr.forEach((ec) => {
      let eyeColor: EyeColor = {
        kind: 'eyeColor',
        baseColor: ec,
        alternateColor: '#a0a0a0',
      };
      eyeColors.push(eyeColor);
    });
    return eyeColors;
  }
}
