export class ColorHsl {
  h: number;
  s: number;
  l: number;
  constructor(hue: number, saturation: number, lightness: number) {
    this.h = hue;
    this.s = saturation;
    this.l = lightness;
  }
}

export class ColorRgb {
  r: number;
  g: number;
  b: number;
  constructor(red: number, green: number, blue: number) {
    this.r = red;
    this.g = green;
    this.b = blue;
  }
}

export type ColorHex = `#${string}`;

export interface SkinColorHexObject {
  fair: ColorHex[];
  dark: ColorHex[];
}

export interface HairColorsProbability {
  HairColors: ColorHex[];
  probability: number;
}

export interface HairColor {
  baseColor: ColorHex;
  highlightColor: ColorHex;
  shadeColor: ColorHex;
}

export interface SkinColor {
  baseColor: ColorHex;
  marks: ColorHex;
}
