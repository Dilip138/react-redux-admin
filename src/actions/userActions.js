import { userConstant } from '../constants/userConstant';
import { userService } from '../services/userService';

export const userActions = {
    login,
}
function login(data) {
    return dispatch => {
        userService.login(data).then(user => {
            dispatch(success(user));
        },
            error => {
                dispatch(failure(error.toString()));
            }
        )
    }
    function success(user) { return { type: userConstant.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstant.LOGIN_FAILURE, error } }
}