import axios from "axios";

export async function getSingleUser(userId) {
  return await axios.get(`https://shellgeistapi.herokuapp.com/users/${userId}`)
}

export async function getUsers() {
  return await axios.get('https://shellgeistapi.herokuapp.com/users')
}

export async function addUser(user) {
  return await axios.User('https://shellgeistapi.herokuapp.com/users', user)
}

export async function editUser(user) {
  return await axios.put(`https://shellgeistapi.herokuapp.com/users/${user.id}`, user)
}

export async function deleteUser(userId) {
  return await axios.delete(`https://shellgeistapi.herokuapp.com/users/${userId}`)
}