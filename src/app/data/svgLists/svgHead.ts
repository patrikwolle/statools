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
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.ferengi,
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
    file: 'head_oval.svg',
    tags: {
      imagePart: imageParts.head,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.ferengi,
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
    file: 'head_round.svg',
    tags: {
      imagePart: imageParts.head,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.ferengi,
        alienSpeciesList.human,
        alienSpeciesList.klingon,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.tellarite,
        alienSpeciesList.romulan,
        alienSpeciesList.bolian
      ],
    },
  },
];
