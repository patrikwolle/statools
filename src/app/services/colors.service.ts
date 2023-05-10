import { Injectable } from '@angular/core';
import { ranks, roles } from '../enums/avatar.enum';
import { ColorHex, HairColor, SkinColor } from '../interfaces/color.interface';
import { idsSvg } from './avatar.service';
import { EyeColor } from '../interfaces/color.interface';

/**
 * Service that handels loading colors and managing colors
 */
@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor() {}
  insigniaOfficers = [
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

  insigniaAdmirals = [
    //source: https://memory-alpha.fandom.com/de/wiki/Sternenflottenr%C3%A4nge
    //0: hide, 1: show fill, 2: show no fill
    {
      key: 'all',
      value: [
        '#ens-bobble',
        '#lt-bobble',
        '#cmd-bobble',
        '#captain-bobble',
        '#admiral-bobble',
      ],
    },
    { key: 'commodore', value: ['0', '0', '1', '0', '0'] },
    { key: 'rear_admiral', value: ['0', '1', '0', '1', '0'] },
    { key: 'vice_admiral', value: ['0', '1', '1', '1', '0'] },
    { key: 'admiral', value: ['1', '1', '1', '1', '0'] },
    { key: 'fleet_admiral', value: ['1', '1', '1', '1', '1'] },
  ];

  setUniformColor(element: HTMLElement | null, role: roles) {
    if (element !== null) {
      let color = disciplineColors.find((dc) => dc.role === role)?.color;
      this.changeColorOfStyle(element, 'fill', color);
    }
  }

  setSpeciesColors(color: SkinColor) {
    let specialEls = [];
    specialEls.push(document.getElementById('eye_left'));
    specialEls.push(document.getElementById('eye_right'));
    let specialDarkEls = [];
    specialDarkEls.push(document.getElementById('nose_special'));
    let specialLightEls = [];
    specialLightEls.push(document.getElementById('nose_special_front'));

    specialEls.forEach((el) => {
      if (el) {
        this.changeColorOfStyle(el, 'fill', color.special);
      }
    });
    specialDarkEls.forEach((el) => {
      if (el) {
        this.changeColorOfStyle(el, 'fill', color.specialDark);
      }
    });
    specialLightEls.forEach((el) => {
      if (el) {
        this.changeColorOfStyle(el, 'fill', color.specialLight);
      }
    });
  }

  setSkinColor(color: SkinColor) {
    let els = [];
    els.push(document.getElementById('head'));
    els.push(document.getElementById('ears'));
    els.push(document.getElementById('neck'));
    els.push(document.getElementById('nose'));

    this.setSpeciesColors(color);

    if (document.getElementById('species_special')) {
      els.push(document.getElementById('species_special'));
    }
    els.forEach((el) => {
      if (el) {
        this.changeColorOfStyle(el, 'fill', color.baseColor);
      }
    });
    let marks = document.getElementById('marks');
    if (marks) {
      this.changeColorOfStyle(marks, 'fill', color.marks);
    }
    let shavenElement = document.getElementById('unshaven');
    if (shavenElement && !this.unshaven) {
      this.changeColorOfStyle(shavenElement, 'fill', color.baseColor);
    }
  }
  unshaven = false;
  setUnshaven(v: boolean) {
    this.unshaven = v;
  }
  setHairColor(color: HairColor) {
    idsSvg.hair.forEach((id) => {
      let element = document.getElementById(id);
      if (element !== null && element !== undefined) {
        switch (id) {
          case 'hair_highlight':
          case 'hair_highlight_long':
          case 'beard_highlight':
            this.changeColorOfStyle(element, 'fill', color.highlightColor);
            break;
          case 'hair_shade':
          case 'hair_shade_long':
          case 'eyebrows':
          case 'beard':
            this.changeColorOfStyle(element, 'fill', color.shadeColor);
            break;
          case 'unshaven':
            if (this.unshaven) {
              this.changeColorOfStyle(element, 'fill', color.shadeColor);
            }
            break;
          default:
            this.changeColorOfStyle(element, 'fill', color.baseColor);
            break;
        }
      }
    });
  }

  setEyeColor(color: EyeColor) {
    idsSvg.eyes.forEach((id) => {
      let element = document.getElementById(id);
      if (element !== null && element !== undefined) {
        switch (id) {
          case 'pupil_left':
          case 'pupil_right':
            this.changeColorOfStyle(element, 'fill', color.baseColor);
            break;
          default:
            this.changeColorOfStyle(element, 'fill', color.baseColor);
            break;
        }
      }
    });
  }

  setInsigniaColor(rank: ranks, officer: number) {
    if (officer === 1) {
      let rankIds = this.insigniaOfficers.find((i) => i.key === rank);
      let index = 3;
      rankIds?.value.forEach((ins) => {
        let elId = this.insigniaOfficers.find((i) => i.key === 'all')?.value[
          index
        ];
        if (elId !== undefined) {
          this.fillInsignia(document.getElementById(elId.split('#')[1]), ins);
        }
        index--;
      });
    } else if (officer === 2) {
      let rankIds = this.insigniaAdmirals.find((i) => i.key === rank);
      let index = 4;
      rankIds?.value.forEach((ins) => {
        let elId = this.insigniaAdmirals.find((i) => i.key === 'all')?.value[
          index
        ];
        if (elId !== undefined) {
          this.fillInsignia(document.getElementById(elId.split('#')[1]), ins);
        }
        index--;
      });
    }
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
