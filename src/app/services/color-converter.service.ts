import { Injectable } from '@angular/core';
import { ColorHex, ColorHsl, ColorRgb } from '../interfaces/color.interface';

/**
 * Service that handels loading colors and managing colors
 * @author patrikwolle
 */
@Injectable({
  providedIn: 'root',
})
export class ColorConversionService {
  hexToRgb(hex: string) {
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

    const r = parseInt(result[1], 16) / 255;
    const g = parseInt(result[2], 16) / 255;
    const b = parseInt(result[3], 16) / 255;

    return new ColorRgb(r, g, b);
  }

  hexToHSL(hex: ColorHex) {
    let rgb: ColorRgb = this.hexToRgb(hex);

    const max = Math.max(rgb.r, rgb.g, rgb.b);
    const min = Math.min(rgb.r, rgb.g, rgb.b);

    let h = (max + min) / 2;
    let s = h;
    let l = h;

    if (max === min) {
      return new ColorHsl(h, s, l);
    }

    const diff = max - min;
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);
    switch (max) {
      case rgb.r:
        h = (rgb.g - rgb.b) / diff + (rgb.g < rgb.b ? 6 : 0);
        break;
      case rgb.g:
        h = (rgb.b - rgb.r) / diff + 2;
        break;
      case rgb.b:
        h = (rgb.r - rgb.g) / diff + 4;
        break;
    }
    h /= 6;

    s = Math.round(s * 100);
    l = Math.round(l * 100);
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
}
