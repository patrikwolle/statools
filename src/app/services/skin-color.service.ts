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
  pinkSkin,
} from '../data/skin-colors';

/**
 * Service that handels loading colors and managing colors
 * @author patrikwolle
 */
@Injectable({
  providedIn: 'root',
})
export class skinColorService {
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
      default:
        throw new Error('Could not parse race');
    }
  }

  getSkinColor(race: alienRaceList): SkinColor {
    switch (race) {
      case alienRaceList.human:
      case alienRaceList.vulcan:
      case alienRaceList.bajoran: {
        return this.generateSkinColors(fleshySkin);
      }
      case alienRaceList.klingon:
      case alienRaceList.ferengi: {
        return this.generateSkinColors(darkSkin);
      }
      case alienRaceList.andorian:
      case alienRaceList.bolian:
      case alienRaceList.benzite: {
        return this.generateSkinColors(blueSkin);
      }
      case alienRaceList.betazoid:
      case alienRaceList.trill:
      case alienRaceList.denobulan:
      case alienRaceList.grazerite:
      case alienRaceList.ktarian: {
        return this.generateSkinColors(fairSkin);
      }
      case alienRaceList.tellarite:
      case alienRaceList.efrosian: {
        return this.generateSkinColors([...pinkSkin.fair, ...pinkSkin.dark]);
      }
      case alienRaceList.cardassian: {
        return this.generateSkinColors(brownSkin.fair);
      }
      default:
        throw new Error('Could not parse race');
    }
  }
  generateSkinColors(basicColor: ColorHex[]): SkinColor {
    const randomBaseColor = this.getRandomElement(basicColor);
    const baseColor = this.lightnessVariation(randomBaseColor, this.ranNum(5));
    const racial = this.lightnessVariation(randomBaseColor, -20);
    return {
      baseColor: baseColor,
      racial: racial,
    };
  }

  getRandomElement(colorArr: ColorHex[]): ColorHex {
    let color = colorArr[Math.floor(Math.random() * colorArr.length)];
    return color;
  }

  lightnessVariation(baseColor: ColorHex, lightnessDiff: number): ColorHex {
    let baseColHsl = this.colorConverter.hexToHSL(baseColor);
    let newLightness = baseColHsl.l + lightnessDiff;
    if (newLightness < 0) {
      baseColHsl.l = 0;
    } else if (newLightness > 100) {
      baseColHsl.l = 100;
    } else {
      baseColHsl.l = newLightness;
    }
    return this.colorConverter.hslToHex(baseColHsl);
  }

  ranNum(max: number) {
    return (
      Math.ceil(Math.random() * (max - 1)) *
      (Math.round(Math.random()) ? 1 : -1)
    );
  }
}
