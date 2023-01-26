import { NAV_ACTION_TYPES } from './nav.types';
import { createAction } from '../../utils/reducer';

export const setIsNavOpen = (boolean) =>
  createAction(NAV_ACTION_TYPES.SET_IS_NAV_OPEN, boolean);