import {
  IS_EMPLOYER,
  LOGIN_TO_PAGE,
  LOGOUT_FROM_PAGE,
  UPDATE_ACTIVE_USER_CV,
  UPDATE_ACTIVE_USER_PHOTO,
} from "../actions/authActions";
import { activeUser } from "../initialValues";

const initialState = {
  activeUser: activeUser,
  isLogin: false,
  isEmployer: false,
  defaultPhoto:"https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg"
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_TO_PAGE:
      if (payload.photoUrl !== null) {
        return {
          ...state,
          activeUser: { ...state.activeUser, ...payload },
          isLogin: true,
        };
      } else {
        delete payload.photoUrl;
        return {
          ...state,
          activeUser: { ...state.activeUser, ...payload },
          isLogin: true,
        };
      }

    case LOGOUT_FROM_PAGE:
      return {
        ...state,
        activeUser: {
          ...activeUser,
        },
        isLogin: false,
      };

    case IS_EMPLOYER:
      return {
        ...state,
        isEmployer: payload,
      };

      case UPDATE_ACTIVE_USER_PHOTO:
        return{
          ...state,
          activeUser:{
            ...state.activeUser,
            photoUrl:payload
          }
        }

        case UPDATE_ACTIVE_USER_CV:
          return{
            ...state,
            activeUser:{
              ...state.activeUser,
              cv:payload
            }
          }
      
    default:
      return state;
  }
}
