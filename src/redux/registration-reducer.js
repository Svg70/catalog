import { RegisterAPI } from "../dal/dal";

const SET_REGISTER_RES = 'SET_REGISTER_RES'
const BUTTON_DISABLE = 'BUTTON_DISABLE'
const SEND_INFO_MESSAGE = 'SEND_INFO_MESSAGE'

const registerInitialState = {
    message: null,
    success: false,
    buttonDisable: false
};

export const registrationReducer = (state = registerInitialState, action) => {
    switch (action.type) {
        case "SET_REGISTER_RES":
            return {
                ...state, message: action.response.message, success: action.response.success
            }
        case "BUTTON_DISABLE":
            return {
                ...state, buttonDisable: action.buttonStatus
            }
        case 'SEND_INFO_MESSAGE':
            return {   
                ...state, message: action.userMessage
            }
        default: return state
    }
};


const setRegisterResponse = (response) => {
    return { type: SET_REGISTER_RES, response }
}
const buttonDisable = (buttonStatus) => {
    return { type: BUTTON_DISABLE, buttonStatus }
}
const sendInfoMessage = (userMessage) => {
    return { type: SEND_INFO_MESSAGE, userMessage }
}



export const register = (email, password, name, surname, patronic, telephone) =>
    async (dispatch, getStore) => {
        dispatch(buttonDisable(true))

        try {
            let result = await RegisterAPI.registerMe(email, password, name, surname, patronic, telephone);
            dispatch(setRegisterResponse(result.data))
            dispatch(buttonDisable(false))
        } catch (error) {
            // dispatch(setRegisterResponse(error))
            dispatch(sendInfoMessage('Ошибка регистрации'))
            dispatch(buttonDisable(false))
        }
    };