import { Injectable } from '@angular/core';
import {
  darkGrayHair,
  grayHair,
  normaleAndColeredHair,
  normaleHair,
  orionHair,
  whiteHair,
} from '../data/hair-colors';
import { alienSpeciesList } from '../enums/avatar.enum';
import { ColorHex, HairColor } from '../interfaces/color.interface';
import { ColorConversionService } from './color-converter.service';

/**
 * Service that handels loading hairColors and managing hairColors
 */
@Injectable({
  providedIn: 'root',
})
export class HairColorService {
  constructor(private colorConverter: ColorConversionService) {}

  getHairColor(species: alienSpeciesList): HairColor[] | 'skinColor' {
    switch (species) {
      case alienSpeciesList.human:
      case alienSpeciesList.betazoid:
      case alienSpeciesList.trill: {
        return this.getHairColorWithHighlightColor(normaleAndColeredHair);
      }
      case alienSpeciesList.vulcan:
      case alienSpeciesList.denobulan:
      case alienSpeciesList.bajoran:
      case alienSpeciesList.ktarian:
      case alienSpeciesList.tellarite: {
        return this.getHairColorWithHighlightColor(normaleHair);
      }
      case alienSpeciesList.klingon: {
        return this.getHairColorWithHighlightColor(darkGrayHair);
      }
      case alienSpeciesList.andorian: {
        return this.getHairColorWithHighlightColor(
          Object.assign(whiteHair, grayHair)
        );
      }
      case alienSpeciesList.bolian:
      case alienSpeciesList.ferengi:
      case alienSpeciesList.grazerite:
        return 'skinColor';
      case alienSpeciesList.efrosian: {
        return this.getHairColorWithHighlightColor(whiteHair);
      }
      case alienSpeciesList.orion: {
        return this.getHairColorWithHighlightColor(orionHair);
      }
      default:
        throw new Error('Could not parse species');
    }
  }

  getHairColorWithHighlightColor(hairColorArr: ColorHex[]): HairColor[] {
    let hairColors: HairColor[] = [];
    hairColorArr.forEach((hc) => {
      let hairColor: HairColor = {
        kind: 'hairColor',
        baseColor: hc,
        highlightColor: this.colorConverter.lightnessVariation(hc, 10),
        shadeColor: this.colorConverter.lightnessVariation(hc, -10),
      };
      hairColors.push(hairColor);
    });
    return hairColors;
  }
}
