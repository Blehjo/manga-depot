import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const sessionUser = JSON.parse(sessionStorage.getItem("user"));

export const userDocument = (user) => {
    return user;
}

export const apiCall = async (email, password) => {
    const user = {};
    await axios({
        method: 'post',
        url: "https://shellgeistapi.herokuapp.com/api/users/login",
        data: {
            email: email,
            password: password
        },
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    })
    .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        sessionStorage.setItem("user", JSON.stringify(response.data));
        user.id = response.data;
        user.data = response.data;
    });
    return user;
}

export const getUser = async () => {
    const user = {};
    await axios({
        method: 'get',
        url: "https://shellgeistapi.herokuapp.com/api/users/",
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    })
    .then((response) => user.data = (response.data));
    return user;
}

export const signUpUser = async (username, email, password, country, date_of_birth, first_name, last_name) => {
    const user = {};

    await axios({
        method: 'post',
        url: "https://shellgeistapi.herokuapp.com/api/users/",
        data: {
            username: username,
            email: email,
            password: password,
            country: country,
            date_of_birth: date_of_birth,
            first_name: first_name,
            last_name: last_name
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => user.data = (response.data));
    return user;
}