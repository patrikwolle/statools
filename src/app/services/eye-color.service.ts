import { Injectable } from '@angular/core';
import { ColorHex, EyeColor } from '../interfaces/color.interface';
import { alienSpeciesList } from '../enums/avatar.enum';
import {
  bluePupil,
  greenPupil,
  blackPupil,
  normalEyeColors
} from '../data/eye-colors';


/**
 * Service that handels loading eyeColors and managing eyeColors
 * @author fabl
 */
@Injectable({
    providedIn: 'root',
  })
  export class EyeColorService {
  
    getEyeColor(species: alienSpeciesList): ColorHex[] {
      switch (species) {
        case alienSpeciesList.human:
        case alienSpeciesList.betazoid:
        case alienSpeciesList.trill: {
          return normalEyeColors;
        }
        case alienSpeciesList.vulcan:
        case alienSpeciesList.denobulan:
        case alienSpeciesList.bajoran:
        case alienSpeciesList.ktarian: {
            return normalEyeColors;
        }
        case alienSpeciesList.klingon:
        case alienSpeciesList.tellarite: {
            return normalEyeColors;
        }
        case alienSpeciesList.andorian: {
            return normalEyeColors;
        }
        case alienSpeciesList.bolian:
        case alienSpeciesList.ferengi:
        case alienSpeciesList.grazerite:
        case alienSpeciesList.benzite: {
            return normalEyeColors;
        }
        case alienSpeciesList.efrosian: {
            return normalEyeColors;
        }
        case alienSpeciesList.orion: {
            return normalEyeColors;
        }
        default:
          throw new Error('Could not parse species');
      }
    }
}