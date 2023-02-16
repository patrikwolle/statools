import { Injectable } from '@angular/core';
import { ColorHex, SkinColor } from '../interfaces/color.interface';
import { ColorConversionService } from './color-converter.service';
import { alienRaceList } from '../enums/avatar.enum';
import {
  blueSkin,
  brownSkin,
  darkSkin,
  fairSkin,
  fleshySkin,
  greenSkin,
  pinkSkin,
} from '../data/skin-colors';
import { hairColorService } from './hair-color.service';

/**
 * Service that handels loading colors and managing colors
 * @author patrikwolle
 */
@Injectable({
  providedIn: 'root',
})
export class SkinColorService {
  constructor(private colorConverter: ColorConversionService) {}

  getSkinColors(race: alienRaceList): ColorHex[] {
    switch (race) {
      case alienRaceList.human:
      case alienRaceList.vulcan:
      case alienRaceList.bajoran: {
        return fleshySkin;
      }
      case alienRaceList.klingon:
      case alienRaceList.ferengi: {
        return darkSkin;
      }
      case alienRaceList.andorian:
      case alienRaceList.bolian:
      case alienRaceList.benzite: {
        return blueSkin;
      }
      case alienRaceList.betazoid:
      case alienRaceList.trill:
      case alienRaceList.denobulan:
      case alienRaceList.grazerite:
      case alienRaceList.ktarian: {
        return fairSkin;
      }
      case alienRaceList.tellarite:
      case alienRaceList.efrosian: {
        return [...pinkSkin.fair, ...pinkSkin.dark];
      }
      case alienRaceList.cardassian: {
        return brownSkin.fair;
      }
      case alienRaceList.orion: {
        return greenSkin;
      }
      default:
        throw new Error('Could not parse race');
    }
  }

  generateSkinColors(basicColor: ColorHex): SkinColor {
    const baseColor = this.colorConverter.lightnessVariation(
      basicColor,
      this.ranNum(5)
    );
    const marks = this.colorConverter.lightnessVariation(basicColor, -20);
    return {
      baseColor: baseColor,
      marks: marks,
    };
  }

  getRandomElement(colorArr: ColorHex[]): ColorHex {
    let color = colorArr[Math.floor(Math.random() * colorArr.length)];
    return color;
  }

  ranNum(max: number) {
    return (
      Math.ceil(Math.random() * (max - 1)) *
      (Math.round(Math.random()) ? 1 : -1)
    );
  }
}
