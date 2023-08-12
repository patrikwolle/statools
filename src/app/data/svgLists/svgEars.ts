import { alienSpeciesList, gender, imageParts } from '../../enums/avatar.enum';
import { avatarList } from '../../interfaces/avatar.interface';

export const earsSvgList: avatarList[] = [
  {
    file: 'ears_human.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
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
    file: 'ears_human_round.svg',
    tags: {
      imagePart: imageParts.ears,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
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
];
