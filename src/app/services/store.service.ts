import { Injectable } from '@angular/core';
import { bodyPart, race, SVGPart } from '../interfaces/uploadInterfaces';

/** Service that handles storing, loading and modification of arrays used to generate Avatars */
@Injectable({
  providedIn: 'root',
})
export class StoreService {
  races: race[] = [
    {
      name: 'human',
      value: 'human',
    },
  ];

  bodyParts: bodyPart[] = [
    {
      name: 'head',
      value: 'head',
    },
  ];

  svgParts: SVGPart[] = [];

  constructor() {}

  /** Get all races stored */
  getRaces(): race[] {
    return this.races;
  }

  getSvgParts(): SVGPart[] {
    return this.svgParts;
  }

  setRaces(arr: race[]): void {
    this.races = arr;
  }

  getBodyParts(): bodyPart[] {
    return this.bodyParts;
  }

  /** Add a new race to the stored race values if it doesn't contain this race allready */
  addRace(newRace: race[]): race[] {
    newRace.forEach((race) => {
      if (this.races.find((r) => r.name === race.name) === undefined) {
        this.races.push(race);
      }
    });
    return this.races;
  }

  /** Add a new bodyPart to the stored bodyPart values if it doesn't contain this bodyPart allready */
  addBodyPart(newBodyPart: bodyPart[]): bodyPart[] {
    newBodyPart.forEach((bp) => {
      if (this.bodyParts.find((b) => b.name === bp.name) === undefined) {
        this.bodyParts.push(bp);
      }
    });
    return this.races;
  }

  storeSVG(obj: SVGPart): boolean {
    if (this.svgParts.find((s) => s.filename === obj.filename)) {
      return false;
    } else {
      this.svgParts.push(obj);
      this.saveToLocalStorage('svgParts', JSON.stringify(this.svgParts));
      return true;
    }
  }

  loadFromLocalSorage(key: string): string | null {
    return localStorage.getItem(key);
  }

  saveToLocalStorage(key: string, value: any) {
    localStorage.setItem(key, value);
  }
}
