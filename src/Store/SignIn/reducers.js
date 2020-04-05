import { LOG_IN_CHANGE_EMAIL_TEXT, LOG_IN_CHANGE_PASSWORD_TEXT} from "../constants";

const defaultState ={
    email: '',
    password: ''
};

export const logInReducer = (state = defaultState,action) => {
    switch(action.type){
        case LOG_IN_CHANGE_EMAIL_TEXT:
            return{
                ...state,
                email : action.payload
            };
        case LOG_IN_CHANGE_PASSWORD_TEXT:
            return{
                ...state,
                password: action.payload
            };

        default :
        return state;
    }
}