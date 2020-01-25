import axios from 'axios';

export const userService = {
    login,
    allData,
    logout
}

export function login(data) {
    console.log("res in login services", data);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/adminLogin", data)
}

export function allData() {
    return axios.get("http://fundoonotes.incubation.bridgelabz.com/api/user/getAdminUserList", {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}

export function getQues() {
    return axios.get("http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/getUnApprovedAnswer", {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
function logout() {
    // remove user from local storage to log user out
    localStorage.clear();
}
