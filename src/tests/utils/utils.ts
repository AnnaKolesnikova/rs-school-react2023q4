import { ICharacter } from '../../types/types';

export const characterDataMock: ICharacter[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Alive',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)"',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Citadel of Ricks"',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z',
  },
];

export const getItemsArray = (length: number) => {
  return Array.from(Array(length), (_, ind) =>
    Object.assign({}, ...characterDataMock, { id: ind + 1 })
  );
};
