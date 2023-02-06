import { getUser } from '../../utils/userDocument';
import { USER_ACTION_TYPES } from './user.types';

const getCurrentUser = getUser()
.then(response => {
    return response.data;
})
.catch(err => {
    console.error(err);
});

const USER_INITIAL_STATE = {
    currentUser: getCurrentUser ? getCurrentUser : null,
    isLoading: false,
    error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
            case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
            return { ...state, currentUser: payload };
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null };
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
            return { ...state, error: payload };
        default:
            return state;
    }
};