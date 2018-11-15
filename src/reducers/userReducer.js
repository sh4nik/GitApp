import {
    GET_USER,
    GET_USER_FAIL,
    GET_USER_SUCCESS
} from '../actions/userActions';
import { STATE } from '../stateDef';

const defaultState = STATE.userContext;

export function userReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_USER:
            return { ...state, loadingProfile: true };
        case GET_USER_SUCCESS:
            return { ...state, loadingProfile: false, user: action.payload.data };
        case GET_USER_FAIL:
            return {
                ...state,
                loadingProfile: false,
                errorUser: 'Error getting user info'
            };
        default:
            return state;
    }
}
