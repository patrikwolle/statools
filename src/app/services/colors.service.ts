import { Injectable } from '@angular/core';
import {
  ColorHex,
  HairColorsProbability,
  SkinColor,
  SkinColorHexObject,
} from '../interfaces/color.interface';
import { alienRaceList, ranks, roles } from './svgList.service';

/**
 * Service that handels loading colors and managing colors
 * @author patrikwolle
 */
@Injectable({
  providedIn: 'root',
})
export class ColorServicce {
  constructor() {}
  insignia = [
    //source: https://memory-alpha.fandom.com/de/wiki/Sternenflottenr%C3%A4nge
    //0: hide, 1: show fill, 2: show no fill
    {
      key: 'all',
      value: ['#ens-bobble', '#lt-bobble', '#cmd-bobble', '#captain-bobble'],
    },
    { key: 'crewman', value: ['0', '0', '0', '0'] },
    { key: 'petty_officer', value: ['0', '0', '0', '2'] },
    { key: 'ensign', value: ['0', '0', '0', '1'] },
    { key: 'junior_lieutenant', value: ['0', '0', '2', '1'] },
    { key: 'lieutenant', value: ['0', '0', '1', '1'] },
    { key: 'lt_commander', value: ['0', '2', '1', '1'] },
    { key: 'commander', value: ['0', '1', '1', '1'] },
    { key: 'captain', value: ['1', '1', '1', '1'] },
  ];

  setUniformColor(element: HTMLElement | null, role: roles) {
    if (element !== null) {
      let color = disciplineColors.find((dc) => dc.role === role)?.color;

      this.changeColorOfStyle(element, 'fill', color);
    }
  }

  setSkinColor(color: ColorHex) {
    let els = [];
    els.push(document.getElementById('head'));
    els.push(document.getElementById('ear_left'));
    els.push(document.getElementById('ear_right'));
    els.push(document.getElementById('neck'));
    if (document.getElementById('antenna')) {
      els.push(document.getElementById('antenna'));
    }
    els.forEach((el) => {
      if (el) {
        this.changeColorOfStyle(el, 'fill', color);
      }
    });
  }
  setInsigniaColor(rank: ranks) {
    let rankIds = this.insignia.find((i) => i.key === rank);
    let index = 3;
    rankIds?.value.forEach((ins) => {
      let elId = this.insignia.find((i) => i.key === 'all')?.value[index];
      if (elId !== undefined) {
        this.fillInsignia(document.getElementById(elId.split('#')[1]), ins);
      }
      index--;
    });
  }

  fillInsignia(insignia: HTMLElement | null, fillValue: string) {
    if (insignia !== null) {
      switch (fillValue) {
        case '2':
          this.changeColorOfStyle(insignia, 'fill', 'none');
          this.changeColorOfStyle(insignia, 'stroke', '#ffcc00');
          break;
        case '1':
          this.changeColorOfStyle(insignia, 'fill', '#ffcc00');
          this.changeColorOfStyle(insignia, 'stroke', '#ffcc00');
          break;
        case '0':
          this.changeColorOfStyle(insignia, 'fill', 'none');
          this.changeColorOfStyle(insignia, 'stroke', 'none');
      }
    }
  }

  changeColorOfStyle(el: HTMLElement, key: string, value: string | undefined) {
    let styleString = el.getAttribute('style');
    let firstPart: string | undefined;
    let lastPart: string | undefined;
    if (key === 'fill') {
      firstPart = styleString?.split('fill')[0] + 'fill:';
      lastPart = styleString?.split(/;(.*)/s)[1];
      if (lastPart?.includes('fill')) {
        lastPart = lastPart.split(/;(.*)/s)[1];
      }
    } else if (key === 'stroke') {
      firstPart = styleString?.split(/;(.*)/s)[0] + ';stroke:';
      lastPart = 'stroke-width' + styleString?.split(';stroke-width')[1];
    }
    let newString = `${firstPart}${value};${lastPart}`;
    el.setAttribute('style', newString);
  }

  replaceColor() {}
}

export const disciplineColors = [
  //source: https://www.color-hex.com/color-palette/6450
  { role: roles.science, color: '#0099f6' as ColorHex },
  { role: roles.medicine, color: '#0099f6' as ColorHex },
  { role: roles.operations, color: '#f2c300' as ColorHex },
  { role: roles.security, color: '#f2c300' as ColorHex },
  { role: roles.command, color: '#df0000' as ColorHex },
  { role: roles.flycontrol, color: '#df0000' as ColorHex },
];
//skin color
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

//hair color
export const whiteHair: ColorHex[] = ['#fafafa', '#f2f3f5', '#e8e9eb'];
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
export const redHair: ColorHex[] = ['#a94631', '#cc3333', '#990000'];
export const coloredHair: ColorHex[] = [
  '#ff9900',
  '#3399ff',
  '#8800ff',
  '#ff99cc',
  '#009966',
];
export const normaleAndColeredHair: HairColorsProbability[] = [
  { HairColors: whiteHair, probability: 0.02 },
  { HairColors: grayHair, probability: 0.04 },
  { HairColors: blondHair, probability: 0.25 },
  { HairColors: brownHair, probability: 0.4 },
  { HairColors: darkHair, probability: 0.2 },
  { HairColors: redHair, probability: 0.05 },
  { HairColors: coloredHair, probability: 0.04 },
];
export const normaleHair: HairColorsProbability[] = [
  { HairColors: whiteHair, probability: 0.02 },
  { HairColors: grayHair, probability: 0.04 },
  { HairColors: blondHair, probability: 0.22 },
  { HairColors: brownHair, probability: 0.5 },
  { HairColors: darkHair, probability: 0.2 },
  { HairColors: redHair, probability: 0.02 },
];
export const darkGrayHair: HairColorsProbability[] = [
  { HairColors: whiteHair, probability: 0.01 },
  { HairColors: grayHair, probability: 0.01 },
  { HairColors: darkHair, probability: 0.98 },
];
