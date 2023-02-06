import axios from "axios";

export const userDocument = (user) => {
    return user;
}

export const login = async (email, password) => {
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
        return response.data;
    });
}

export const getUser = async () => {
    const user = await axios({
        method: 'get',
        url: "https://shellgeistapi.herokuapp.com/api/users/",
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true
    })
    .then((response) => console.log(response))
    .then((info) => {
        return info;
    });
    return user;
}

export const signUpUser = async (username, email, password, country, date_of_birth, first_name, last_name) => {
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
    .then((response) => {
        return response.data;
    });
}