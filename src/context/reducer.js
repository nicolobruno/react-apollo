import { actions } from './actions'

export const globalReducer = (state, action) => {
    switch (action.type) {
      case actions.SET_FILTERS: {
        return {
          ...state,
          filters: action.payload
        };
      }
      case actions.CHANGE_FILTERS: {
        return {
          ...state,
          filters: state.filters.merge(action.payload)
        };
      }
      case actions.CLEAN_FILTERS: {
        return {
          ...state,
          filters: []
        };
      }
    default:
      return state;
    }
  };
