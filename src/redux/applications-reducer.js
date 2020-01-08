import { ApplicationsAPI } from "../dal/dal"

const SEND_MESSAGE = 'SEND_MESSAGE'

let initialstate = {
    message : null
}

let ApplicationsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return{...state, message: action.message}
        }
        default:
            return state
    }
}

const sendMessageAC = (message) => {
    return{type: SEND_MESSAGE, message}
}

export const sendApplication = (name,  description, photo1, photo2, photo3) =>
    async (dispatch, getStore) => {
        let response = await ApplicationsAPI.makeNewApplication(name,  description, photo1, photo2, photo3)
        dispatch(sendMessageAC(response.data.message))
    };

export default ApplicationsReducer