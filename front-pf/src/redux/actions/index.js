import {
  CREATE_USER,
  GET_CAROUSEL,
  GET_ALL_EXCURSION,
  GET_ALL_PACKS,
  GET_ALL_HOTEL,
  GET_PACKS,
  GET_PACK_BY_ID,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  GET_ACTIVITIES,
  SET_BUY,
  GET_CURRENT_USER,
  VERIFY_ORDER,
} from "./actionsTypes";

import data from "../../data.json";
import fullData from "../../pages/dataFull.json";
import { ContactlessOutlined } from "@mui/icons-material";
const url = 'http://localhost:5000/'

const axios = require("axios");

export function getHotels() {
  return (dispatch) => {
    axios("http://localhost:5000/Hotel")
      .then((res) => dispatch({ type: GET_ALL_HOTEL, payload: res.data }))
      .catch((error) => console.log(error));
  };
}

export function getExcursiones() {
  return (dispatch) => {
    axios("http://localhost:5000/excursiones")
      .then((res) => dispatch({ type: GET_ALL_EXCURSION, payload: res.data }))
      .catch((error) => console.log(error));
  };
}

export function getCarousel () {
  return async function (dispatch) {
    let json = await axios.get(`${url}excursion/carousel`)
    return dispatch({
      type: GET_CAROUSEL,
      payload: json.data
    })
  }
}

export function getActivities (country) {
  console.log(country)
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:5000/excursion/findActivityDataCountry?country=${country}`)
    console.log(json)
    return dispatch ({
      type: GET_ACTIVITIES,
      payload: json.data
    })
  }
}

export function getPacks () {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:5000/package/packages`)
    return dispatch ({
      type: GET_PACKS,
      payload: json.data
    })
  }
}

export function setBuy (payload) {
  return async function (dispatch) {
  return dispatch ({
    type: SET_BUY,
    payload: payload
  })}
}
  
export function verifyOrder (payload) {
  return async function (dispatch) {
    let json = await axios.post(`${url}purchase/purchaseDetail`, {data: payload},)
    return dispatch ({
      type: VERIFY_ORDER,
      payload: json.data
    })
  }
}



export function userRegister (data) {
  console.log(data)
  console.log(`${url}customer/CreateCustomer`)
  return async function (dispatch) {
    let json = await axios.post(`${url}customer/CreateCustomer`, data)
    console.log(json)
    return dispatch({
      type: USER_REGISTER,
      payload: json.data
    })
  }
}

export const getCurrentUser = (obj) => (dispatch) => {
  return dispatch({ type: GET_CURRENT_USER, payload: obj });
};

export const getPackById = (packId) => async (dispatch) => {
  const pack = await data.filter((pack) => pack.id === packId);
  console.log(pack);
  return dispatch({ type: GET_PACK_BY_ID, payload: pack });
};

export const userLogin = (obj) => async (dispatch) => {
  let data = {
    method: "get",
    url: "http://localhost:5000/auth/google/login",
    headers: {
      Authorization: "Bearer " + (await obj),
    },
  };
  const login = await axios.request(data);

  dispatch({ type: USER_LOGIN, payload: login });
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};
