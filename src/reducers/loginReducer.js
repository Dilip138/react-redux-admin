import { userConstant } from '../constants/userConstant';

export function login(state = { user: [] }, action) {
    switch (action.type) {
        case userConstant.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case userConstant.LOGIN_FAILURE:
            return {
                loggedIn: false
            }
        default:
            return state
    }
}