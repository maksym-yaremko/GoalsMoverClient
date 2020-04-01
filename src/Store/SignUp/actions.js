import { SIGN_UP_CHANGE_EMAIL_TEXT, SIGN_IN_CHANGE_PASSWORD_TEXT} from "../constants";

export const setEmailText = (email) => ({
    type: SIGN_UP_CHANGE_EMAIL_TEXT,
    payload : email
})

export const setPasswordText = (password) => ({
    type: SIGN_IN_CHANGE_PASSWORD_TEXT,
    payload : password
})