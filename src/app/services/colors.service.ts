import { Injectable } from '@angular/core';
import { alienRaceList, ranks, roles } from '../enums/avatar.enum';
import {
  ColorHex,
  HairColor,
  HairColorsProbability,
  SkinColor,
  SkinColorHexObject,
} from '../interfaces/color.interface';
import { idsSvg } from './avatar.service';

/**
 * Service that handels loading colors and managing colors
 * @author patrikwolle
 */
@Injectable({
  providedIn: 'root',
})
export class ColorService {
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

  setSkinColor(color: SkinColor, race: alienRaceList) {
    let els = [];
    els.push(document.getElementById('head'));
    els.push(document.getElementById('ear_left'));
    els.push(document.getElementById('ear_right'));
    els.push(document.getElementById('neck'));
    els.push(document.getElementById('marks'));
    els.push(document.getElementById('nose'));
    if (document.getElementById('antenna')) {
      els.push(document.getElementById('antenna'));
    }
    if (document.getElementById('head_racial')) {
      els.push(document.getElementById('head_racial'));
    }
    els.forEach((el) => {
      if (el) {
        this.changeColorOfStyle(el, 'fill', color.baseColor);
      }
    });
    let marks = document.getElementById('marks');
    if (marks && race == alienRaceList.trill) {
      this.changeColorOfStyle(marks, 'fill', color.marks);
    }
  }

  setHairColor(color: HairColor) {
    idsSvg.hair.forEach((id) => {
      let element = document.getElementById(id);
      if (element !== null && element !== undefined) {
        switch (id) {
          case 'hair_highlight':
          case 'hair_highlight_long':
            this.changeColorOfStyle(element, 'fill', color.highlightColor);
            break;
          case 'hair_shade':
          case 'hair_shade_long':
          case 'eyebrows_left':
          case 'eyebrows_right':
          case 'beard':
            this.changeColorOfStyle(element, 'fill', color.shadeColor);
            break;
          default:
            this.changeColorOfStyle(element, 'fill', color.baseColor);
            break;
        }
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
