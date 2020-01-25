import { userConstants } from '../constants/userConstant';

export default (state = { user: [] }, action) => {
    switch (action.type) {
        case userConstants.GETALL_SUCCESS:
            return {
                loading: true,
                user: action.user
            }
        case userConstants.GETALL_FAILURE:
            return {
                loading: false,
            }
        case userConstants.LOGOUT:
            return {
                loggedIn: false
            }

        default:
            return state
    }
}