import axios from 'axios';

export function login(data) {
    console.log("res in login services", data);
    return axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login", data)
}