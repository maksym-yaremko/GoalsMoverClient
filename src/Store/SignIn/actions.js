import { LOG_IN_CHANGE_EMAIL_TEXT, LOG_IN_CHANGE_PASSWORD_TEXT} from "../constants";

export const setEmailText = (email) => ({
    type: LOG_IN_CHANGE_EMAIL_TEXT,
    payload : email
})

export const setPasswordText = (password) => ({
    type: LOG_IN_CHANGE_PASSWORD_TEXT,
    payload : password
})