import { IS_EMPLOYER, LOGIN_TO_PAGE, LOGOUT_FROM_PAGE } from "../actions/authActions";
import { activeUser } from "../initialValues";

const initialState = {
  activeUser: activeUser,
  isLogin: false,
  isEmployer:false,
};

export default function authReducer(state = initialState, {type,payload}) {

  switch (type) {
    
    case LOGIN_TO_PAGE:
        
        if(payload.photoUrl !== null){
            return {
                ...state,
                activeUser: {...state.activeUser,...payload},
                isLogin: true,
              };

        }else{
            delete payload.photoUrl
            return{
                ...state,
                activeUser:{...state.activeUser,...payload},
                isLogin:true
            }

        }

      

    case LOGOUT_FROM_PAGE:
      return {
        ...state,
        activeUser: {
            ...activeUser
        },
        isLogin: false,
      };

      case IS_EMPLOYER:
        return {
            ...state,
            isEmployer:payload
        }


    default:
      return state;
  }
}
