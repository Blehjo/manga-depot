import { PROFILE_ACTION_TYPES } from './profile.types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setIsProfileOpen = (boolean) =>
  createAction(PROFILE_ACTION_TYPES.SET_IS_PROFILE_OPEN, boolean);