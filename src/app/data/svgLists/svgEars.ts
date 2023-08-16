import {alienSpeciesList, gender, imageParts} from '../../enums/avatar.enum';
import {avatarList} from '../../interfaces/avatar.interface';

export const earsSvgList: avatarList[] = [
  {
    file: 'ears_human.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.bajoran,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.human,
        alienSpeciesList.klingon,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.tellarite,
      ],
    },
  },
  {
    file: 'ears_vulcan.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [
          alienSpeciesList.romulan,
          alienSpeciesList.vulcan
      ],
    },
  },
  {
    file: 'ears_human_round.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.bajoran,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.human,
        alienSpeciesList.klingon,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.tellarite,
        alienSpeciesList.bolian
      ],
    },
  },
  {
    file: 'no_ears.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.ferengi],
    },
  },
  {
    file: 'ears_benzite.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.benzite],
    },
  },
  {
    file: 'ears_bajoran_gold1.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.bajoran],
    },
  },
  {
    file: 'ears_bajoran_gold2.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.bajoran],
    },
  },
  {
    file: 'ears_bajoran_gold3.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.bajoran],
    },
  },
  {
    file: 'ears_bajoran_silver1.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.bajoran],
    },
  },
  {
    file: 'ears_bajoran_silver2.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.bajoran],
    },
  },
  {
    file: 'ears_bajoran_silver3.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.bajoran],
    },
  },

];
