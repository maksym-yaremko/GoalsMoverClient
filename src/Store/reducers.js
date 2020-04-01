import { combineReducers } from "redux";
import { signUpReducer } from "./SignUp/reducers";

export default combineReducers({
    signUp: signUpReducer
})