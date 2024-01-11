import { alienSpeciesList, gender, imageParts } from '../enums/avatar.enum';

export interface avatarList {
  file: string | string[];
  name?: string;
  tags: {
    imagePart: imageParts;
    gender: gender[];
    species: alienSpeciesList[];
    era?: string;
  };
}

/**
 * Interface for the background Images
 */
export interface backgroundInterface {
  name: string;
  path: string;
}
