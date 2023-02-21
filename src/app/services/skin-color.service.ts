import { Injectable } from '@angular/core';
import { ColorHex, SkinColor } from '../interfaces/color.interface';
import { ColorConversionService } from './color-converter.service';
import { alienSpeciesList } from '../enums/avatar.enum';
import {
  blueSkin,
  brownSkin,
  darkSkin,
  fairSkin,
  fleshySkin,
  greenSkin,
  pinkSkin,
} from '../data/skin-colors';
import { HairColorService } from './hair-color.service';

/**
 * Service that handels loading colors and managing colors
 * @author patrikwolle
 */
@Injectable({
  providedIn: 'root',
})
export class SkinColorService {
  constructor(private colorConverter: ColorConversionService) {}

  getSkinColors(species: alienSpeciesList): ColorHex[] {
    switch (species) {
      case alienSpeciesList.human:
      case alienSpeciesList.vulcan:
      case alienSpeciesList.bajoran: {
        return fleshySkin;
      }
      case alienSpeciesList.klingon:
      case alienSpeciesList.ferengi: {
        return darkSkin;
      }
      case alienSpeciesList.andorian:
      case alienSpeciesList.bolian:
      case alienSpeciesList.benzite: {
        return blueSkin;
      }
      case alienSpeciesList.betazoid:
      case alienSpeciesList.trill:
      case alienSpeciesList.denobulan:
      case alienSpeciesList.grazerite:
      case alienSpeciesList.ktarian: {
        return fairSkin;
      }
      case alienSpeciesList.tellarite:
      case alienSpeciesList.efrosian: {
        return [...pinkSkin.fair, ...pinkSkin.dark];
      }
      case alienSpeciesList.orion: {
        return greenSkin;
      }
      default:
        throw new Error('Could not parse species');
    }
  }

  generateSkinColors(
    basicColor: ColorHex,
    species: alienSpeciesList
  ): SkinColor {
    const baseColor = this.colorConverter.lightnessVariation(
      basicColor,
      this.ranNum(5)
    );
    let marks = baseColor;
    if (species === alienSpeciesList.trill) {
      marks = this.colorConverter.lightnessVariation(basicColor, -20);
    }
    return {
      kind: 'skinColor',
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
