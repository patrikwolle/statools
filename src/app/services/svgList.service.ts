import { Injectable } from '@angular/core';

/** Service that handles storing, loading and modification of arrays used to generate Avatars */
@Injectable({
  providedIn: 'root',
})
export class svgList {}

export enum alienRaceList {
  andorian = 'andorian',
  betazoid = 'betazoid',
  bolian = 'bolian' /* */,
  benzite = 'benzite' /* */,
  bajoran = 'bajoran' /* */,
  cardassian = 'cardassian' /* */,
  denobulan = 'denobulan' /* */,
  efrosian = 'efrosian' /* */,
  ferengi = 'ferengi' /* */,
  grazerite = 'grazerite' /* */,
  human = 'human',
  ktarian = 'ktarian' /* */,
  klingon = 'klingon' /* */,
  tellarite = 'tellarite' /* */,
  trill = 'trill',
  vulcan = 'vulcan',
}
export enum imageParts {
  uniform = 'uniform',
  head = 'head',
  eyes = 'eyes',
  eyebrows = 'eyebrows',
  mouth = 'mouth',
  nose = 'nose',
  ears = 'ears',
  hair = 'hair',
  headDeco = 'headDeco',
  headRacial = 'headRacial',
}
export enum gender {
  male = 'male',
  female = 'female',
}

export enum roles {
  command = 'command',
  science = 'science',
  operations = 'operations',
  medicine = 'medicine',
  flycontrol = 'flycontrol',
  security = 'security',
}

export enum ranks {
  crewman = 'crewman',
  petty_officer = 'petty_officer',
  ensign = 'ensign',
  junior_lieutenant = 'junior_lieutenant',
  lieutenant = 'lieutenant',
  lt_commander = 'lt_commander',
  commander = 'commander',
  captain = 'captain',
}

export interface avatarList {
  file: string | string[];
  name?: string;
  tags: {
    imagePart: imageParts;
    gender: gender[];
    race: alienRaceList[];
  };
}

export const avatarSvgList: avatarList[] = [
  {
    file: 'uniform_male.svg',
    name: 'Male Uniform 1',
    tags: {
      imagePart: imageParts.uniform,
      gender: [gender.male],

      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'uniform_male2.svg',
    name: 'Male Uniform 2',
    tags: {
      imagePart: imageParts.uniform,
      gender: [gender.male],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: 'uniform_male3.svg',
    name: 'Male Uniform 3',
    tags: {
      imagePart: imageParts.uniform,
      gender: [gender.male],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: 'uniform_female1.svg',
    name: 'Female Uniform 1',
    tags: {
      imagePart: imageParts.uniform,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'uniform_female2.svg',
    name: 'Female Uniform 2',
    tags: {
      imagePart: imageParts.uniform,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'uniform_female3.svg',
    name: 'Female Uniform 3',
    tags: {
      imagePart: imageParts.uniform,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'head_littleEdgy.svg',
    tags: {
      imagePart: imageParts.head,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'head_oval.svg',
    tags: {
      imagePart: imageParts.head,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'eyes_neutral.svg',
    tags: {
      imagePart: imageParts.eyes,
      gender: [gender.male],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'eyes_relaxed.svg',
    tags: {
      imagePart: imageParts.eyes,
      gender: [gender.male],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'eyes_tense.svg',
    tags: {
      imagePart: imageParts.eyes,
      gender: [gender.male],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'eyes_neutral_f.svg',
    tags: {
      imagePart: imageParts.eyes,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'eyes_smaller_f.svg',
    tags: {
      imagePart: imageParts.eyes,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'eyes_dull_f.svg',
    tags: {
      imagePart: imageParts.eyes,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'eyes_dull.svg',
    tags: {
      imagePart: imageParts.eyes,
      gender: [gender.male],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: 'eyebrows_neutral.svg',
    tags: {
      imagePart: imageParts.eyebrows,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: 'eyebrows_passive.svg',
    tags: {
      imagePart: imageParts.eyebrows,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'mouth_neutral.svg',
    tags: {
      imagePart: imageParts.mouth,
      gender: [gender.male],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'mouth_neutral_f.svg',
    tags: {
      imagePart: imageParts.mouth,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'mouth_slightlyHappy.svg',
    tags: {
      imagePart: imageParts.mouth,
      gender: [gender.male],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: 'mouth_slightlyHappy_f.svg',
    tags: {
      imagePart: imageParts.mouth,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },

  {
    file: 'nose_pointy.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'nose_hooked.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'nose_small.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'nose_small2.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'nose_small3.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'ears_human.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: 'ears_vulcan.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      race: [alienRaceList.vulcan],
    },
  },

  {
    file: 'hair_vulcan.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
  {
    file: 'hair_undercut.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: 'hair_short_pony.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: 'hair_bald_head.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: 'hair_half_bald.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: ['hair_longA.svg', 'hair_longB.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: ['hair_long2A.svg', 'hair_long2B.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: ['hair_long3A.svg', 'hair_long3B.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.human,
        alienRaceList.trill,
      ],
    },
  },
  {
    file: 'antenna_short.svg',
    tags: {
      imagePart: imageParts.headDeco,
      gender: [gender.male, gender.female],
      race: [alienRaceList.andorian],
    },
  },
  {
    file: 'antenna_logerSide.svg',
    tags: {
      imagePart: imageParts.headDeco,
      gender: [gender.male, gender.female],
      race: [alienRaceList.andorian],
    },
  },
  {
    file: 'trill_marks.svg',
    tags: {
      imagePart: imageParts.headRacial,
      gender: [gender.male, gender.female],
      race: [alienRaceList.trill],
    },
  },
  {
    file: 'hair_bun_with_ponytail.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.female],
      race: [
        alienRaceList.andorian,
        alienRaceList.betazoid,
        alienRaceList.ferengi,
        alienRaceList.human,
        alienRaceList.trill,
        alienRaceList.vulcan,
      ],
    },
  },
];
