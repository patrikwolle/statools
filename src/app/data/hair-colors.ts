import { ColorHex } from '../interfaces/color.interface';

export const whiteHair: ColorHex[] = ['#fafaf1', '#f2f3f5', '#e8e9eb'];
export const grayHair: ColorHex[] = ['#cfccc3', '#a3a695', '#7e836c'];
export const blondHair: ColorHex[] = [
  '#faf0be',
  '#e1cb9a',
  '#f4dd6c',
  '#bc9b34',
  '#a67c26',
];
export const brownHair: ColorHex[] = ['#84532a', '#653521', '#55413a'];
export const darkHair: ColorHex[] = ['#492d2a', '#321b0f', '#272b2a'];
export const greenHair: ColorHex[] = [
  '#9c9d59',
  '#46a273',
  '#0d3f33',
  '#12604a',
  '#103a24',
  '#182d1c',
];
export const redHair: ColorHex[] = ['#a94631', '#cc3333', '#990000'];
export const coloredHair: ColorHex[] = [
  '#ff9900',
  '#3399ff',
  '#8800ff',
  '#ff99cc',
  '#009966',
];
export const orionHair: ColorHex[] = [
  ...grayHair,
  ...greenHair,
  ...brownHair,
  ...darkHair,
  ...redHair,
];
export const normaleAndColeredHair: ColorHex[] = [
  ...whiteHair,
  ...grayHair,
  ...blondHair,
  ...blondHair,
  ...brownHair,
  ...darkHair,
  ...redHair,
  ...coloredHair,
];

export const normaleHair: ColorHex[] = [
  ...whiteHair,
  ...grayHair,
  ...blondHair,
  ...blondHair,
  ...brownHair,
  ...darkHair,
  ...redHair,
];

export const darkGrayHair: ColorHex[] = [
  ...whiteHair,
  ...grayHair,
  ...darkHair,
];
