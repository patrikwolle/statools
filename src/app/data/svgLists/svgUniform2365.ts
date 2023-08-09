import {avatarList} from '../../interfaces/avatar.interface';
import {alienSpeciesList, gender, imageParts} from '../../enums/avatar.enum';

export const uniform2365SvgList: avatarList[] = [
    {
        file: 'uniform_female4_2365.svg',
        name: 'Female 2365 Uniform 4',
        tags: {
            imagePart: imageParts.uniform,
            gender: [gender.female],
            era: '2365',
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
            ],
        },
    }
]
