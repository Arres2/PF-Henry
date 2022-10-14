import axios from "axios";

const URL = process.env.REACT_APP_API_SERVER_URL;

export function getUserInformation(token, email) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios(`${URL}user?email=${email}`, options);
}

export function getUserReservations(token, userId) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios(`${URL}user/reservations?userId=${userId}`, options);
}

export function getUserReservation(token, orderId) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios(`${URL}user/reservation/${orderId}`, options);
}

export function cancelUserReservation(token, userId, rentId) {
  const options = {
    method: "DELETE",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios.delete(`${URL}rent/refund/${userId}/${rentId}`, options);
}

export function addUser(email, picture) {
  return axios.post(`${URL}user`, { email, picture });
}

export function updateUser(user, token) {
  // console.log("service token: "+token);
  const options = {
    method: "PATCH",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios.patch(`${URL}user/${user.userId}`, user, options);
}
export function getAllUsersInfo(token, email) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios.get(`${URL}admin/users?email=${email}`, options);
}

export function deleteUserInfo(userId, token) {
  const options = {
    method: "DELETE",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios.delete(`${URL}admin/users/${userId}`, options);
}

export function getAllReservs(token, orderId) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
    params: { orderId },
  };
  return axios.get(`${URL}admin/reservations`, options);
}

export function deleteReserv(reservId, token) {
  const options = {
    method: "DELETE",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios.delete(`${URL}admin/reservations/delete/${reservId}`, options);
}
