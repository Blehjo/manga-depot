import { createSelector } from 'reselect';

const selectResultReducer = (state) => state.result;

export const selectResultItems = createSelector(
  [selectResultReducer],
  (result) => result.resultItems
);