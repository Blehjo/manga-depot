import { NAV_ACTION_TYPES } from './nav.types';

export const NAV_INITIAL_STATE = {
  isNavOpen: false
};

export const navReducer = (state = NAV_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case NAV_ACTION_TYPES.SET_IS_NAV_OPEN:
      return {
        ...state,
        isNavOpen: payload,
      };
    default:
      return state;
  }
};