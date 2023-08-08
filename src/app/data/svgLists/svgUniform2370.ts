import {avatarList} from '../../interfaces/avatar.interface';
import {alienSpeciesList, gender, imageParts} from '../../enums/avatar.enum';

export const uniform2370SvgList: avatarList[] = [
    {
        file: 'uniform_female1_2370.svg',
        name: 'Female 2370 Uniform 1',
        tags: {
            imagePart: imageParts.uniform,
            gender: [gender.female],
            era: '2370',
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
    },
    {
        file: 'uniform_male1_2370.svg',
        name: 'Male 2370 Uniform 1',
        tags: {
            imagePart: imageParts.uniform,
            gender: [gender.male],
            era: '2370',
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
