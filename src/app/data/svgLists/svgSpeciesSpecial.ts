import { alienSpeciesList, gender, imageParts } from '../../enums/avatar.enum';
import { avatarList } from '../../interfaces/avatar.interface';

export const speciesSpecialSvgList: avatarList[] = [
  {
    file: 'antenna_short.svg',
    tags: {
      imagePart: imageParts.speciesSpecial,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.andorian],
    },
  },
  {
    file: 'antenna_logerSide.svg',
    tags: {
      imagePart: imageParts.speciesSpecial,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.andorian],
    },
  },
  {
    file: 'denobulan_forehead.svg',
    tags: {
      imagePart: imageParts.speciesSpecial,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.denobulan],
    },
  },
  {
    file: 'klingon_forehead.svg',
    tags: {
      imagePart: imageParts.speciesSpecial,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.efrosian, alienSpeciesList.klingon],
    },
  },
  {
    file: 'klingon_forehead_connected.svg',
    tags: {
      imagePart: imageParts.speciesSpecial,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.efrosian, alienSpeciesList.klingon],
    },
  },
  {
    file: 'klingon_forehead_no_sides.svg',
    tags: {
      imagePart: imageParts.speciesSpecial,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.efrosian, alienSpeciesList.klingon],
    },
  },
  {
    file: 'tellarite_forehead.svg',
    tags: {
      imagePart: imageParts.speciesSpecial,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.tellarite],
    },
  },
];
