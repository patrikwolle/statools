import { Injectable } from '@angular/core';
import { ColorHex, SkinColor } from '../interfaces/color.interface';
import { ColorConversionService } from './color-converter.service';
import { alienSpeciesList } from '../enums/avatar.enum';
import {
  blueSkin,
  darkSkin,
  fairSkin,
  fleshySkin,
  greenSkin,
  pinkSkin,
} from '../data/skin-colors';

/**
 * Service that handels loading colors and managing colors
 */
@Injectable({
  providedIn: 'root',
})
export class SkinColorService {
  constructor(private colorConverter: ColorConversionService) {}

  getSkinColors(species: alienSpeciesList): ColorHex[] {
    switch (species) {
      case alienSpeciesList.bajoran:
      case alienSpeciesList.human:
      case alienSpeciesList.romulan:
      case alienSpeciesList.vulcan: {
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
      case alienSpeciesList.ktarian:
      case alienSpeciesList.tamarian: {
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
    let skinColorObject: SkinColor = {
      kind: 'skinColor',
      baseColor: basicColor,
      marks: basicColor,
      special: basicColor,
      specialDark: basicColor,
      specialLight: basicColor,
    };
    if (species === alienSpeciesList.trill) {
      skinColorObject.marks = this.colorConverter.baseColorVariation(
        basicColor,
        { lightnessVariation: -20 }
      );
    }
    skinColorObject.special = this.colorConverter.baseColorVariation(
      basicColor,
      { lightnessVariation: -10 }
    );
    skinColorObject.specialDark = this.colorConverter.baseColorVariation(
      basicColor,
      { lightnessVariation: -15 }
    );
    skinColorObject.specialLight = this.colorConverter.baseColorVariation(
      basicColor,
      { lightnessVariation: -20 }
    );
    if (species === alienSpeciesList.tellarite) {
      skinColorObject.special = this.colorConverter.baseColorVariation(
        basicColor,
        { lightnessVariation: -15, saturationVariation: -20 }
      );
      skinColorObject.specialLight = this.colorConverter.baseColorVariation(
        basicColor,
        {
          lightnessVariation: -10,
          saturationVariation: -20,
          colorVariation: { r: 60, g: 0, b: 0 },
        }
      );
      skinColorObject.specialDark = this.colorConverter.baseColorVariation(
        basicColor,
        { lightnessVariation: -40, saturationVariation: -30 }
      );
    }

    return skinColorObject;
  }

  ranNum(max: number) {
    return (
      Math.ceil(Math.random() * (max - 1)) *
      (Math.round(Math.random()) ? 1 : -1)
    );
  }
}
