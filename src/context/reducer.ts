import { Actions, ActionMap } from './actions'

export type FilterType = {
  name: string,
  species: string
};

export type StateType = {
  filters: FilterType | undefined
};

type FilterPayload = {
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

export type FilterActions = ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>];

export const filterReducer = (state : StateType, action : FilterActions): StateType => {
    switch (action.type) {
      case Actions.Set: {
        return {
          ...state,
          filters: action.payload.filters
        };
      }
      case Actions.Change: {
        return {
          ...state,
          filters: action.payload.filters
        };
      }
      case Actions.Clean: {
        return {
          ...state,
          filters: undefined
        };
      }
    default:
      return state;
    }
  };
