import { RESULT_ACTION_TYPES } from './result.types';

export const RESULT_INITIAL_STATE = {
  resultItems: [],
};

export const resultReducer = (state = RESULT_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case RESULT_ACTION_TYPES.SET_RESULT_ITEMS:
      return {
        ...state,
        resultItems: payload,
      };
    default:
      return state;
  }
};