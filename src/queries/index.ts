import {
    gql
} from '@apollo/client';

export const GET_CHARACTERS = gql `
  query getCharacters($page: Int!, $filter: FilterCharacter!) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        status
        type
        species
        image
        origin {
          name
          dimension
        }
      }
      info {
        count
        pages
      }
    }
  }
`;

export const GET_CHARACTER_BY_IDS = gql `
  query getCharactersByIds($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      status
      gender
      type
      species
      image
      origin {
        name
        dimension
      }
    }
  }
`;
