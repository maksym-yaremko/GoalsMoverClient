import { SIGN_UP_CHANGE_EMAIL_TEXT, SIGN_UP_CHANGE_PASSWORD_TEXT } from "../constants";

const defaultState ={
    email: '',
    password: ''
};

export const signUpReducer = (state = defaultState,action) => {
    switch(action.type){
        case SIGN_UP_CHANGE_EMAIL_TEXT:
            return{
                ...state,
                email : action.payload
            };
        case SIGN_UP_CHANGE_PASSWORD_TEXT:
            return{
                ...state,
                password: action.payload
            };

        default :
        return state;
    }
}