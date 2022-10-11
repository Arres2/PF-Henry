import { ActionTypes } from "@mui/base";
import {
  GET_ALL_PACKS,
  GET_ALL_HOTEL,
  GET_ALL_EXCURSION,
  GET_CURRENT_USER,
  GET_PACK_BY_ID,
  USER_LOGIN,
  USER_LOGOUT,
} from "../actions/actionsTypes";

const initialState = {
  hotels: [],
  packs: [],
  excursiones: [
    {
      id: 1,
      name: "Montañismo",
      info: "Se trata de la disciplina, en general deportiva o recreativa, que consiste en la realización del ascenso y descenso de montañas. Es también el conjunto de técnicas, conocimientos y Destreza o habilidades orientadas a la realización de este objetivo",
      dificultad: 2,
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/montana-1554997095.jpg?crop=1.00xw:0.754xh;0,0.166xh&resize=1200:*",
      DiaI: "5/9/23",
      DiaF: "5/9/23",
    },
    {
      id: 2,
      name: "Senderismo",
      info: "El senderismo busca acercar a las personas al medio natural y al conocimiento de la zona a través del patrimonio y los elementos etnográficos y culturales tradicionales, utilizando especialmente senderos de tierra, antiguos caminos de herradura y carreteros, cañadas y caminos reales, caminos forestales y otros, evitando en lo posible el tránsito a través de rutas asfaltadas u hormigonadas.",
      dificultad: 1,
      img: "https://estaticos.muyinteresante.es/uploads/images/gallery/5f2a75795cafe8053b39bcfc/senderismo-redes.jpg",
      DiaI: "6/9/23",
      DiaF: "6/9/23",
    },
  ],
  currentUser: {},
  loginAccess: {},
  packById: {},
  boolean: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HOTEL:
      return {
        ...state,
        hotels: action.payload,
      };

    case GET_ALL_EXCURSION:
      return {
        ...state,
        excursiones: action.payload,
      };
    case GET_CURRENT_USER:
      console.log(state);
      return {
        ...state,
        currentUser: action.payload,
      };
    case GET_PACK_BY_ID:
      console.log(action.payload)
      return {
        ...state,
        packById: action.payload,
      };
    case USER_LOGIN:
      return {
        ...state,
        loginAccess: action.payload,
      };
    case USER_LOGOUT:
      return {
        ...state,
        loginAccess: {},
      };
    default:
      return {
        ...state,
      };
  }
};
