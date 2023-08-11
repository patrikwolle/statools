import {alienSpeciesList, gender, imageParts} from '../../enums/avatar.enum';
import {avatarList} from '../../interfaces/avatar.interface';

export const eyebrowsSvgList: avatarList[] = [
  {
    file: 'eyebrows_neutral.svg',
    tags: {
      imagePart: imageParts.eyebrows,
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
    file: 'eyebrows_passive.svg',
    tags: {
      imagePart: imageParts.eyebrows,
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
        alienSpeciesList.vulcan,
        alienSpeciesList.tellarite,
        alienSpeciesList.romulan
      ],
    },
  },
  {
    file: 'eyebrows_short.svg',
    tags: {
      imagePart: imageParts.eyebrows,
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
    file: 'eyebrows_klingon_wild.svg',
    tags: {
      imagePart: imageParts.eyebrows,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.efrosian,
        alienSpeciesList.klingon,
        alienSpeciesList.tellarite,
      ],
    },
  },
  {
    file: 'eyebrows_klingon_pointy.svg',
    tags: {
      imagePart: imageParts.eyebrows,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.efrosian,
        alienSpeciesList.klingon,
        alienSpeciesList.tellarite,
      ],
    },
  },
  {
    file: 'no_eyebrows.svg',
    tags: {
      imagePart: imageParts.eyebrows,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.ferengi, alienSpeciesList.bolian],
    },
  },
];
