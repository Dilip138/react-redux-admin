import { userConstants } from '../constants/userConstant';

export default (state = { user: [] }, action) => {
    switch (action.type) {
        case userConstants.GETALLQUESTION_SUCCESS:
            return {
                loading: true,
                user: action.user
            }
        case userConstants.GETALLQUESTION_FAILURE:
            return {
                loading: false,
            }
        default:
            return {
                state
            }
    }
}