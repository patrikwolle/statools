import { alienSpeciesList, gender, imageParts } from '../../enums/avatar.enum';
import { avatarList } from '../../interfaces/avatar.interface';

export const headSvgList: avatarList[] = [
  {
    file: 'head_littleEdgy.svg',
    tags: {
      imagePart: imageParts.head,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.benzite,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.ferengi,
        alienSpeciesList.human,
        alienSpeciesList.klingon,
        alienSpeciesList.orion,
        alienSpeciesList.romulan,
        alienSpeciesList.tamarian,
        alienSpeciesList.tellarite,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
      ],
    },
  },
  {
    file: 'head_oval.svg',
    tags: {
      imagePart: imageParts.head,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.benzite,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.ferengi,
        alienSpeciesList.human,
        alienSpeciesList.klingon,
        alienSpeciesList.orion,
        alienSpeciesList.romulan,
        alienSpeciesList.tamarian,
        alienSpeciesList.tellarite,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
      ],
    },
  },
  {
    file: 'head_round.svg',
    tags: {
      imagePart: imageParts.head,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.benzite,
        alienSpeciesList.betazoid,
        alienSpeciesList.bolian,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.ferengi,
        alienSpeciesList.human,
        alienSpeciesList.klingon,
        alienSpeciesList.orion,
        alienSpeciesList.romulan,
        alienSpeciesList.tamarian,
        alienSpeciesList.tellarite,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
      ],
    },
  },
  {
    file: 'head_oval_bolian.svg',
    tags: {
      imagePart: imageParts.head,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.bolian, alienSpeciesList.tamarian],
    },
  },
  {
    file: 'head_tamarian.svg',
    tags: {
      imagePart: imageParts.head,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.tamarian],
    },
  },
];
