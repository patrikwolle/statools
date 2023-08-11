import { alienSpeciesList, gender, imageParts } from '../../enums/avatar.enum';
import { avatarList } from '../../interfaces/avatar.interface';

export const noseSvgList: avatarList[] = [
  {
    file: 'nose_pointy.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.ferengi,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan,
      ],
    },
  },
  {
    file: 'nose_hooked.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.ferengi,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan,
      ],
    },
  },
  {
    file: 'nose_small.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan,
      ],
    },
  },
  {
    file: 'nose_small2.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan,
      ],
    },
  },
  {
    file: 'nose_small3.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan,
      ],
    },
  },
  {
    file: 'nose_klingon_sharp.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.ferengi, alienSpeciesList.klingon],
    },
  },
  {
    file: 'nose_klingon_pointy.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.ferengi, alienSpeciesList.klingon],
    },
  },
  {
    file: 'nose_klingon_round.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.ferengi, alienSpeciesList.klingon],
    },
  },
  {
    file: 'nose_tellarite_square.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.tellarite],
    },
  },
  {
    file: 'nose_tellarite_round.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.tellarite],
    },
  },
  {
    file: 'nose_tellarite_pointy.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.tellarite],
    },
  },
  {
    file: 'no_nose.svg',
    tags: {
      imagePart: imageParts.nose,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.benzite],
    },
  },
];
