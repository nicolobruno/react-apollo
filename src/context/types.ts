import { Actions } from './actions'

export type FilterType = {
    name: string,
    species: string
};
  
export type StateType = {
    filters: FilterType | undefined
};

export type FilterPayload = {
    [Actions.Set]: {
      filters: FilterType
    };
    [Actions.Change]: {
      filters: FilterType
    };
    [Actions.Clean]: {
      filters: FilterType
    };
};
