import { alienSpeciesList, gender, imageParts } from '../../enums/avatar.enum';
import { avatarList } from '../../interfaces/avatar.interface';

export const hairDecoSvgList: avatarList[] = [
  {
    file: 'no_hairDeco.svg',
    name: 'No Hair Deco',
    tags: {
      imagePart: imageParts.hairDeco,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.bajoran,
        alienSpeciesList.benzite,
        alienSpeciesList.betazoid,
        //alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.ferengi,
        alienSpeciesList.human,
        alienSpeciesList.klingon,
        alienSpeciesList.orion,
        alienSpeciesList.romulan,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
      ],
    },
  },
];
