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