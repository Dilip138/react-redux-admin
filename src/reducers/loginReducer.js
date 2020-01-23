import userConstant from '../constants/userConstant';

export function login(state = {}, action) {
    switch (action.type) {
        case userConstant.LOGIN_SUCCESS:
            return {};
        case userConstant.LOGIN_FAILURE:
            return {}
        default:
            return state
    }
}