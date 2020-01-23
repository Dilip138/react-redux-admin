import { userConstant } from '../constants/userConstant';
import { userService } from '../services/userService';

export const userActions = {
    login,
}
function login(username, password) {
    return dispatch => {
        userService.login(username, password).then(user => {
            dispatch(success(user));
            history.pushState('/')
        },
            error => {
                dispatch(failure(error.toString()));
            }
        )
    }
    function success(user) { return { type: userConstant.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstant.LOGIN_FAILURE, user } }
}