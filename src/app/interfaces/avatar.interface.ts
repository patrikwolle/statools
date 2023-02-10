import { alienRaceList, gender, imageParts } from '../enums/avatar.enum';

export interface avatarList {
  file: string | string[];
  name?: string;
  tags: {
    imagePart: imageParts;
    gender: gender[];
    race: alienRaceList[];
  };
}
