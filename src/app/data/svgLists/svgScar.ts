import { alienSpeciesList, gender, imageParts } from '../../enums/avatar.enum';
import { avatarList } from '../../interfaces/avatar.interface';

export const scarSvgList: avatarList[] = [
  {
    file: 'no_scar.svg',
    name: 'No Scar',
    tags: {
      imagePart: imageParts.scar,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.benzite,
        //alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.ferengi,
        alienSpeciesList.human,
        alienSpeciesList.klingon,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.tellarite,
        alienSpeciesList.romulan,
      ],
    },
  },
  {
    file: 'no_hairDeco.svg',
    name: 'No Hair Deco',
    tags: {
      imagePart: imageParts.hairDeco,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.benzite,
        //alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.ferengi,
        alienSpeciesList.human,
        alienSpeciesList.klingon,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan,
      ],
    },
  },
  {
    file: 'no_headDeco.svg',
    name: 'No Head Deco',
    tags: {
      imagePart: imageParts.headDeco,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.benzite,
        //alienSpeciesList.denobulan,
        alienSpeciesList.ferengi,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan,
      ],
    },
  },
];
