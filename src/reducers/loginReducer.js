import userConstant from '../constants/userConstant';

export function login(state = {}, action) {
    switch (action.type) {
        case userConstant.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.data
            };
        case userConstant.LOGIN_FAILURE:
            return {
                loggedIn: false
            }
        default:
            return state
    }
}