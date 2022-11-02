export interface Props {
    character: CharacterType
};

export interface CharacterType {
    id: number,
    name: string,
    status: string,
    type: string,
    species: string,
    gender: string,
    origin: Origin,
    image: string
};

interface Origin {
    name: string, 
    dimension: string
};
