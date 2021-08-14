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
  query getCountry {
    country(code: "AD") {
        name
        native
        capital
        emoji
        code
        currency
        languages {
          code
          name
        }
    }
}
`;