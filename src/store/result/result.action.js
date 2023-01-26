import { RESULT_ACTION_TYPES } from './result.types';
import { createAction } from '../../utils/reducer';

export const setItemsToResult = (resultItems) => {
    return createAction(RESULT_ACTION_TYPES.SET_RESULT_ITEMS, resultItems);
};