import axios from 'axios';
import apiConstant from '../apiConstants/apiConstant';

export const userService = {
    login,
    allData,
    logout,
    getQues
}

export function login(data) {
    console.log("res in login services", data);
    return axios.post(process.env.REACT_APP_BASE_URL + apiConstant.login, data)
}

export function allData() {
    return axios.get(process.env.REACT_APP_BASE_URL + apiConstant.getAdminUserList, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}

export function getQues() {
    return axios.get(process.env.REACT_APP_BASE_URL + apiConstant.getUnApprovedQuestion, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
export function logout() {
    // remove user from local storage to log user out
    localStorage.clear();
}
