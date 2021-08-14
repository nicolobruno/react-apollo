import {
    gql
} from '@apollo/client';

export const GET_COUNTRIES = gql `
  query getCountries {
    countries {
        name
        code    
    }
}
`;

export const GET_COUNTRY_BY_CODE = gql `
  query getCountry($code: ID!) {
    country(code: $code) {
        name
        native
        capital
        emoji
        code
        currency
        continent {
            name
        }
        languages {
          code
          name
        }
    }
}
`;