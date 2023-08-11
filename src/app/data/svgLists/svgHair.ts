import { alienSpeciesList, gender, imageParts } from '../../enums/avatar.enum';
import { avatarList } from '../../interfaces/avatar.interface';

export const hairSvgList: avatarList[] = [
  {
    file: 'hair_vulcan.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan
      ],
    },
  },
  {
    file: ['hair_bald_head.svg', 'hair_klingon_long.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.klingon, alienSpeciesList.tellarite],
    },
  },
  {
    file: ['hair_bald_head.svg', 'hair_klingon_tail.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.efrosian,
        alienSpeciesList.klingon,
        alienSpeciesList.tellarite,
      ],
    },
  },
  {
    file: ['hair_bald_head.svg', 'hair_klingon_long_smooth.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.efrosian,
        alienSpeciesList.klingon,
        alienSpeciesList.tellarite,
      ],
    },
  },
  {
    file: ['hair_bald_head.svg', 'hair_tail.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.human,
        alienSpeciesList.klingon,
        alienSpeciesList.orion,
        alienSpeciesList.tellarite,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan
      ],
    },
  },
  {
    file: 'hair_undercut.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
      ],
    },
  },
  {
    file: 'hair_short_pony.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.efrosian,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
      ],
    },
  },
  {
    file: 'hair_bald_head.svg',
    tags: {
      imagePart: imageParts.hair,
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
      ],
    },
  },
  {
    file: 'hair_half_bald.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.efrosian,
        alienSpeciesList.human,
        alienSpeciesList.klingon,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
      ],
    },
  },
  {
    file: ['hair_longA.svg', 'hair_longB.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
      ],
    },
  },
  {
    file: ['hair_long2A.svg', 'hair_long2B.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
      ],
    },
  },
  {
    file: ['hair_long3A.svg', 'hair_long3B.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.denobulan,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
      ],
    },
  },
  {
    file: 'hair_bun_with_ponytail.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.female],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.human,
        alienSpeciesList.orion,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan
      ],
    },
  },
  {
    file: 'hair_iro.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.human,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan
      ],
    },
  },
  {
    file: 'hair_the_boimler.svg',
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male],
      species: [
        alienSpeciesList.andorian,
        alienSpeciesList.betazoid,
        alienSpeciesList.human,
        alienSpeciesList.trill,
        alienSpeciesList.vulcan,
        alienSpeciesList.romulan
      ],
    },
  },
  {
    file: ['ears_ferengi_standard1.svg', 'ears_ferengi_standard2.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male],
      species: [alienSpeciesList.ferengi],
    },
  },
  {
    file: ['ears_ferengi_variation1.svg', 'ears_ferengi_variation2.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male],
      species: [alienSpeciesList.ferengi],
    },
  },
  {
    file: ['ears_ferengi_small1.svg', 'ears_ferengi_small2.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male, gender.female],
      species: [alienSpeciesList.ferengi],
    },
  },
  {
    file: ['ears_ferengi_edgy1.svg', 'ears_ferengi_edgy2.svg'],
    tags: {
      imagePart: imageParts.hair,
      gender: [gender.male],
      species: [alienSpeciesList.ferengi],
    },
  },
];
