import { createSelector } from 'reselect';

const selectNavReducer = (state) => state.nav;

export const selectIsNavOpen = createSelector(
  [selectNavReducer],
  (nav) => nav.isNavOpen
);