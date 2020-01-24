import axios from 'axios';

export const userService = {
    login,
    allData,
}

export function login(data) {
    console.log("res in login services", data);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/adminLogin", data)
}

export function allData() {
    return axios.get("http://fundoonotes.incubation.bridgelabz.com/api/productcarts/userCartList", {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
