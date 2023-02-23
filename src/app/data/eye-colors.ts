import { ColorHex } from '../interfaces/color.interface';

export const bluePupil: ColorHex[] = ['#063970'];

export const greenPupil: ColorHex[] = ['#037301', '#39b510', '#1f6109', '#0f3004', '#0a1c04', '#47942e', '#2f4727', '#48703a'];
export const brownPupil: ColorHex[] = ['#592f15'];
export const blackPupil: ColorHex[] = ['#000000'];
export const whitePupil: ColorHex[] = ['#a0a0a0'];


export const normalEyeColors: ColorHex[] = [
  ...blackPupil,
  ...bluePupil,
  ...brownPupil,
  ...[greenPupil[0]],
  ...whitePupil,
];

export const orionEyeColors: ColorHex[] = [
  ...greenPupil,
];
