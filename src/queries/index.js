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
    }
  }
`;
