export interface race{
    name: string,
    value: string
}

export interface bodyPart{
    name: string,
    value: string
}

export interface SVGPart{
    filename: string,
    svg: string,
    tags: {
        bodyPart: string,
        gender: string | string[],
        race: string[]
    }
}