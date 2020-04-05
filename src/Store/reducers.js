import { combineReducers } from "redux";
import { signUpReducer } from "./SignUp/reducers";
import { logInReducer } from "./SignIn/reducers";

export default combineReducers({
    signUp: signUpReducer,
    logIn: logInReducer
})