import { alienSpeciesList, gender, imageParts } from '../enums/avatar.enum';
import { avatarList } from '../interfaces/avatar.interface';
import { beardSvgList } from './svgLists/svgBeard';
import { earsSvgList } from './svgLists/svgEars';
import { eyebrowsSvgList } from './svgLists/svgEyebrows';
import { eyesSvgList } from './svgLists/svgEyes';
import { hairSvgList } from './svgLists/svgHair';
import { hairDecoSvgList } from './svgLists/svgHairDeco';
import { headSvgList } from './svgLists/svgHead';
import { headDecoSvgList } from './svgLists/svgHeadDeco';
import { mouthSvgList } from './svgLists/svgMouth';
import { noseSvgList } from './svgLists/svgNose';
import { scarSvgList } from './svgLists/svgScar';
import { speciesSpecialSvgList } from './svgLists/svgSpeciesSpecial';
import {uniformSvg2380List} from './svgLists/svgUniform2380';
import {uniform2370SvgList} from './svgLists/svgUniform2370';
import {uniform2365SvgList} from './svgLists/svgUniform2365';

export const avatarSvgList: avatarList[] = [
  ...beardSvgList,
  ...earsSvgList,
  ...eyebrowsSvgList,
  ...eyesSvgList,
  ...hairSvgList,
  ...hairDecoSvgList,
  ...headSvgList,
  ...headDecoSvgList,
  ...mouthSvgList,
  ...noseSvgList,
  ...scarSvgList,
  ...speciesSpecialSvgList,
  ...uniform2370SvgList,
  ...uniformSvg2380List,
  ...uniform2365SvgList
];
