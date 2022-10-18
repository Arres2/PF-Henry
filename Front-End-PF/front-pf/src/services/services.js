import axios from "axios";

const URL = process.env.REACT_APP_API_SERVER_URL;

export function getUserInformation(token, email, picture, name, isVerified) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios(
    `${URL}user?email=${email}&picture=${picture}&name=${name}&isVerified=${isVerified}`,
    options
  );
}

export function getUserReservations(token, userId) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios(`${URL}user/reservations?userId=${userId}`, options);
}

export function cancelUserReservation(token, userId, rentId) {
  const options = {
    method: "DELETE",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios.delete(`${URL}rent/refund/${userId}/${rentId}`, options);
}

export function patchUser(token, user) {
  // console.log("service token: "+token);
  const options = {
    method: "PATCH",
    mode: "cors",
    body: { user },
    headers: { authorization: `Bearer ${token}` },
  };
  return axios.patch(`${URL}user/${user.id}`, user, options);
}

export function getAllUsersInfo(token, email) {
  const options = {
    method: "GET",
    mode: "cors",
    headers: { authorization: `Bearer ${token}` },
  };
  return axios.get(`${URL}admin/users?email=${email}`, options);
}

export function deleteUser(userId, token) {
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
