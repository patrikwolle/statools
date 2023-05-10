import { Injectable } from '@angular/core';
import { ColorHex, EyeColor } from '../interfaces/color.interface';
import { alienSpeciesList } from '../enums/avatar.enum';
import { greenPupil, normalEyeColors } from '../data/eye-colors';

/**
 * Service that handels loading eyeColors and managing eyeColors
 */
@Injectable({
  providedIn: 'root',
})
export class EyeColorService {
  getEyeColor(species: alienSpeciesList): EyeColor[] {
    switch (species) {
      case alienSpeciesList.human:
      case alienSpeciesList.betazoid:
      case alienSpeciesList.trill: {
        return this.getSecondEyeColor(normalEyeColors);
      }
      case alienSpeciesList.vulcan:
      case alienSpeciesList.denobulan:
      case alienSpeciesList.bajoran:
      case alienSpeciesList.ktarian: {
        return this.getSecondEyeColor(normalEyeColors);
      }
      case alienSpeciesList.klingon:
      case alienSpeciesList.tellarite: {
        return this.getSecondEyeColor(normalEyeColors);
      }
      case alienSpeciesList.andorian: {
        return this.getSecondEyeColor(normalEyeColors);
      }
      case alienSpeciesList.bolian:
      case alienSpeciesList.ferengi:
      case alienSpeciesList.grazerite:
      case alienSpeciesList.benzite: {
        return this.getSecondEyeColor(normalEyeColors);
      }
      case alienSpeciesList.efrosian: {
        return this.getSecondEyeColor(normalEyeColors);
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
