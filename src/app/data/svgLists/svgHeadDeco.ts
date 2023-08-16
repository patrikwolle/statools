import { alienSpeciesList, gender, imageParts } from '../../enums/avatar.enum';
import { avatarList } from '../../interfaces/avatar.interface';

export const headDecoSvgList: avatarList[] = [
  {
    file: 'no_headDeco.svg',
    name: 'No Head Deco',
    tags: {
      imagePart: imageParts.headDeco,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.bajoran,
        alienSpeciesList.betazoid,
        //alienSpeciesList.denobulan,
        alienSpeciesList.ferengi,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.romulan,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
      ],
    },
  },
];
