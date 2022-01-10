import { stringArrayToObject } from '../utils';

export const actions = stringArrayToObject(
  ['CLEAN_FILTERS', 'SET_FILTERS', 'CHANGE_FILTER']
);

export const actionCreators = {
  cleanFilters: () => ({ type: actions.CLEAN_FILTERS }),
  setFilters: filters => ({ type: actions.SET_FILTERS, payload: filters }),
  changeFilters: ({ value, key }) => ({ type: actions.CHANGE_FILTER, payload: { value, key }})
};
