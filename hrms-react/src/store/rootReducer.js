import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";


const rootReducer = combineReducers({
    auth: authReducer,
    jobAdvertisement:jobAdvertisementReducer
})

export default rootReducer