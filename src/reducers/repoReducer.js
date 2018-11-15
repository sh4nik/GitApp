import {
    GET_REPOS,
    GET_REPOS_FAIL,
    GET_REPOS_SUCCESS,
    GET_REPO_INFO,
    GET_REPO_INFO_FAIL,
    GET_REPO_INFO_SUCCESS
} from '../actions/repoActions';
import { STATE } from '../stateDef';

const defaultState = STATE.repoContext;

export function repoReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_REPOS:
            return { ...state, loading: true };
        case GET_REPOS_SUCCESS:
            return { ...state, loading: false, repos: action.payload.data };
        case GET_REPOS_FAIL:
            return { ...state, loading: false, error: 'Error getting repos info' };
        case GET_REPO_INFO:
            return { ...state, loadingInfo: true };
        case GET_REPO_INFO_SUCCESS:
            return { ...state, loadingInfo: false, repoInfo: action.payload.data };
        case GET_REPO_INFO_FAIL:
            console.log(action.payload);
            return {
                ...state,
                loadingInfo: false,
                errorInfo: 'Error getting repo info'
            };
        default:
            return state;
    }
}
