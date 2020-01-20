import { ApplicationsAPI } from "../dal/dal"

const SEND_MESSAGE = 'SEND_MESSAGE'
const BUTTON_DISABLE = 'BUTTON_DISABLE'
const SET_LIST_OF_APPLICATIONS = 'SET_LIST_OF_APPLICATIONS'
let initialstate = {
    buttonDisable: false,
    message : null,
    listOfApplications: []
}

let ApplicationsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE': 
            return{...state, message: action.message}
        case 'BUTTON_DISABLE':
            return{...state, buttonDisable: action.buttonStatus}
        case 'SET_LIST_OF_APPLICATIONS':
            return{...state, listOfApplications: action.response }
            default:
            return state
    }
}

export const sendMessageAC = (message) => {
    return{type: SEND_MESSAGE, message}
}
const buttonDisabledAC = (buttonStatus) => {
    return{type: BUTTON_DISABLE, buttonStatus}
}
const setListOfApplications = (response) => {
    return{type: SET_LIST_OF_APPLICATIONS, response}
}

export const sendApplication = (name,  description, photo1, photo2, photo3) =>
    async (dispatch, getStore) => {
        dispatch(buttonDisabledAC(true))
        let response = await ApplicationsAPI.makeNewApplication(name,  description, photo1, photo2, photo3)
        dispatch(sendMessageAC(response.data.message))
        dispatch(buttonDisabledAC(false))
    };
export const gettingListOfApplications = () => async (dispatch, getStore) => {
    dispatch(buttonDisabledAC(true))
    let response = await ApplicationsAPI.getListOfApplications()
    dispatch(setListOfApplications(response))
    dispatch(buttonDisabledAC(false))
}
export default ApplicationsReducer