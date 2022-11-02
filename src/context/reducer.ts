import { Actions, ActionMap } from './actions'
import { StateType, FilterPayload } from './types';

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
