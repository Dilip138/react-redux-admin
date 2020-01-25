import { userConstants } from '../constants/userConstant';
import { userService } from '../services/userService';

export const userActions = {
    login,
    allData,
    logout,
    getQues,
}

function login(data) {
    return dispatch => {
        userService.login(data).then(res => {
            //console.log("res oin login ",res);            
            dispatch(success(res));
            window.location.href = '/dashBoardComponent';
            localStorage.setItem("token", res.data.id)
        },
            error => {
                dispatch(failure(error.toString()));
            }
        )
    }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function allData() {
    return dispatch => {
        userService.allData().then(res => {
            //console.log("res in data",res.data.data.data)
            let adminData = res.data.data.data;
            dispatch(success(adminData));
        },
            error => {
                dispatch(failure(error.toString()));
            }
        )
    }
    function success(user) { return { type: userConstants.GETALL_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getQues() {
    return dispatch => {
        userService.getQues().then(res => {
            dispatch(success(res))
        },
            error => {
                dispatch(failure(error))
            }
        )
    }
    function success(user) { return { type: userConstants.GETALL_SUCCESS, user } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}