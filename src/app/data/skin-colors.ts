import { ColorHex, SkinColorHexObject } from "../interfaces/color.interface";

export const pinkSkin: SkinColorHexObject = {
    fair: ['#fae7d0', '#ffdbac'],
    dark: ['#ffcc99', '#feb186'],
  };
  export const yellowSkin: SkinColorHexObject = {
    fair: ['#ffe39f', '#f3e39f', '#e8cda8'],
    dark: ['#dfc183', '#ceab69', '#b58a3f'],
  };
  export const brownSkin: SkinColorHexObject = {
    fair: ['#f2efee', '#efe6dd', '#ebd3c5', '#d7b6a5', '#c8aca3'],
    dark: ['#b98865', '#935d37', '#7b4b2a', '#573719', '#483728'],
  };
  export const fairSkin: ColorHex[] = [
    ...pinkSkin.fair,
    ...yellowSkin.fair,
    ...brownSkin.fair,
  ];
  export const darkSkin: ColorHex[] = [
    ...pinkSkin.dark,
    ...yellowSkin.dark,
    ...brownSkin.dark,
  ];
  export const fleshySkin: ColorHex[] = [...fairSkin, ...darkSkin];
  export const blueSkin: ColorHex[] = [
    '#add8e6',
    '#dffaff',
    '#81e9e6',
    '#c6ffff',
    '#95d4ff',
    '#caeaff',
  ];