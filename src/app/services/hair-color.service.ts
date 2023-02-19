import { Injectable } from '@angular/core';
import {
  darkGrayHair,
  grayHair,
  normaleAndColeredHair,
  normaleHair,
  orionHair,
  whiteHair,
} from '../data/hair-colors';
import { alienRaceList } from '../enums/avatar.enum';
import { ColorHex, HairColor } from '../interfaces/color.interface';
import { ColorConversionService } from './color-converter.service';

/**
 * Service that handels loading hairColors and managing hairColors
 * @author patrikwolle
 */
@Injectable({
  providedIn: 'root',
})
export class hairColorService {
  constructor(private colorConverter: ColorConversionService) {}

  getHairColor(race: alienRaceList): HairColor[] {
    switch (race) {
      case alienRaceList.human:
      case alienRaceList.betazoid:
      case alienRaceList.trill: {
        return this.getHairColorWithHighlightColor(normaleAndColeredHair);
      }
      case alienRaceList.vulcan:
      case alienRaceList.denobulan:
      case alienRaceList.bajoran:
      case alienRaceList.ktarian: {
        return this.getHairColorWithHighlightColor(normaleHair);
      }
      case alienRaceList.klingon:
      case alienRaceList.tellarite: {
        return this.getHairColorWithHighlightColor(darkGrayHair);
      }
      case alienRaceList.andorian: {
        return this.getHairColorWithHighlightColor(
          Object.assign(whiteHair, grayHair)
        );
      }
      case alienRaceList.bolian:
      case alienRaceList.ferengi:
      case alienRaceList.grazerite:
      /*case "benzite": { //TODO: Rassen und Frisuren ohne Haare
        return null;
      }*/
      // eslint-disable-next-line no-fallthrough
      case alienRaceList.efrosian: {
        return this.getHairColorWithHighlightColor(whiteHair);
      }
      case alienRaceList.orion: {
        return this.getHairColorWithHighlightColor(orionHair);
      }
      default:
        throw new Error('Could not parse race');
    }
  }

  getHairColorWithHighlightColor(hairColorArr: ColorHex[]): HairColor[] {
    let hairColors: HairColor[] = [];
    hairColorArr.forEach((hc) => {
      let hairColor = {
        baseColor: hc,
        highlightColor: this.colorConverter.lightnessVariation(hc, 10),
        shadeColor: this.colorConverter.lightnessVariation(hc, -10),
      };
      hairColors.push(hairColor);
    });
    return hairColors;
  }
}
