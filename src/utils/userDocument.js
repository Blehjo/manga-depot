import axios from "axios";

export const userDocument = (user) => {
    const userDocument = user;
    console.log("User Document: ", userDocument);
    return userDocument;
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
        }
    })
    .then((response) => user.data = (response.data));
    return user;
}

export const getUser = async () => {
    const user = {};
    await axios({
        method: 'get',
        url: "https://shellgeistapi.herokuapp.com/api/users/",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => user.data = (response.data));
    return user;
}

export const signUpUser = async (email, password, username, firstName, lastName, dateOfBirth, country) => {
    const user = {};
    await axios({
        method: 'post',
        url: "https://shellgeistapi.herokuapp.com/api/users/",
        data: {
            username: username,
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName,
            date_of_birth: dateOfBirth,
            country: country
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => user.data = (response.data));
    return user;
}