import { Injectable } from '@angular/core';
import { ColorHex, ColorHsl, ColorRgb } from '../interfaces/color.interface';

/**
 * Service that handles loading and managing colors using HSL, hex and RGB formats.
 */
@Injectable({
  providedIn: 'root',
})
export class ColorConversionService {
  /**
   * Converts a hexadecimal color code to an RGB color object.
   * @param {ColorHex} hex - The hexadecimal color code to be converted to RGB.
   * @returns {ColorRgb} The RGB color object of the hex string.
   * @throws {Error} If the hex code is not in the correct format.
   */
  hexToRgb(hex: string): ColorRgb {
    if (hex.length === 4) {
      const extend_Hex = (shortHex: string) =>
        '#' +
        shortHex
          .slice(shortHex.startsWith('#') ? 1 : 0)
          .split('')
          .map((x: any) => x + x)
          .join('');
      hex = extend_Hex(hex);
    }
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result) {
      throw new Error('Could not parse Hex Color');
    }

    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    return new ColorRgb(r, g, b);
  }
  /**
   * Converts an RGB color object to a hexadecimal color code.
   * @param rgbCol - The RGB color object to be converted.
   * @returns The input rgb color as hexadecimal color code.
   */
  rgbToHex(rgbCol: ColorRgb): ColorHex {
    const hexCol: any =
      '#' +
      this.componentToHex(Math.round(rgbCol.r)) +
      this.componentToHex(Math.round(rgbCol.g)) +
      this.componentToHex(Math.round(rgbCol.b));
    return hexCol;
  }
  componentToHex(comp: number) {
    return (comp < 16 ? '0' : '') + comp.toString(16);
  }

  hexToHSL(hex: ColorHex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result) {
      throw new Error('Could not parse Hex Color');
    }

    const rHex = parseInt(result[1], 16);
    const gHex = parseInt(result[2], 16);
    const bHex = parseInt(result[3], 16);

    const r = rHex / 255;
    const g = gHex / 255;
    const b = bHex / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h = (max + min) / 2;
    let s = h;
    let l = h;

    if (max === min) {
      // Achromatic
      return { h: 0, s: 0, l };
    }

    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;

    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);

    return new ColorHsl(h, s, l);
  }

  hslToHex(newColor: ColorHsl): ColorHex {
    newColor.l /= 100;
    const a = (newColor.s * Math.min(newColor.l, 1 - newColor.l)) / 100;
    const f = (n: number) => {
      const k = (n + newColor.h / 30) % 12;
      const color = newColor.l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }

  baseColorVariation(
    baseColor: ColorHex,
    variationOption: {
      lightnessVariation?: number;
      saturationVariation?: number;
      colorVariation?: ColorRgb;
    }
  ) {
    let baseCol = baseColor;

    if (variationOption.lightnessVariation) {
      baseCol = this.lightnessVariation(
        baseCol,
        variationOption.lightnessVariation
      );
    }
    if (variationOption.saturationVariation) {
      baseCol = this.saturationVariation(
        baseCol,
        variationOption.saturationVariation
      );
    }
    if (variationOption.colorVariation) {
      baseCol = this.colorVariation(baseCol, variationOption.colorVariation);
    }
    return baseCol;
  }
  lightnessVariation(baseColor: ColorHex, lightnessDiff: number): ColorHex {
    let baseColHsl = this.hexToHSL(baseColor);
    let newLightness = baseColHsl.l + lightnessDiff;
    if (newLightness < 0) {
      baseColHsl.l = 2;
    } else if (newLightness > 100) {
      baseColHsl.l = 100;
    } else {
      baseColHsl.l = newLightness;
    }
    return this.hslToHex(baseColHsl);
  }

  saturationVariation(baseColor: ColorHex, saturationDiff: number): ColorHex {
    let baseColHsl = this.hexToHSL(baseColor);
    let newSaturation = baseColHsl.s + saturationDiff;
    if (newSaturation < 0) {
      baseColHsl.s = 2;
    } else if (newSaturation > 100) {
      baseColHsl.s = 100;
    } else {
      baseColHsl.s = newSaturation;
    }
    return this.hslToHex(baseColHsl);
  }

  colorVariation(baseColor: ColorHex, saturationDiff: ColorRgb): ColorHex {
    let baseColRgb = this.hexToRgb(baseColor);
    baseColRgb = {
      r: baseColRgb.r + saturationDiff.r,
      g: baseColRgb.g + saturationDiff.g,
      b: baseColRgb.b + saturationDiff.b,
    };
    baseColRgb.r = this.rgbCompCheck(baseColRgb.r);
    baseColRgb.g = this.rgbCompCheck(baseColRgb.g);
    baseColRgb.b = this.rgbCompCheck(baseColRgb.b);
    return this.rgbToHex(baseColRgb);
  }

  rgbCompCheck(comp: number) {
    if (comp < 0) {
      comp = 0;
    } else if (comp > 255) {
      comp = 255;
    }
    return comp;
  }
}
