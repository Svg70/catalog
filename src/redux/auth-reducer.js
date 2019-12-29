import { LoginAPI } from "../dal/dal";

const SET_LOGIN_RES = 'SET_LOGIN_RES'
const BUTTON_DISABLE = 'BUTTON_DISABLE'
const LOGOUT = "LOGOUT"

const loginInitialState = {
    adminIsAuth: false,
    userIsAuth: false,
    approved: false,
    userName: null,
    buttonDisable: false,
    message:null
};

export const loginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_RES':
        return {
            ...state, 
            adminIsAuth: action.response.adminStatus, userIsAuth: true,
            approved: action.response.approved,
            userName: action.response.email, message: action.response.message
        }
        case "LOGOUT":
            return {
                ...state, 
                adminIsAuth: false, userIsAuth: false,
                approved: false,
                userName: null, message: null
            }
        case "BUTTON_DISABLE":
            return{
                ...state, buttonDisable: action.buttonStatus
            }
        default: return state
    }
};


export const setLoginResponse = (response) => {
    return {
        type: SET_LOGIN_RES,
        response
    }
}
const buttonDisable = (buttonStatus) => {
    return { type: BUTTON_DISABLE, buttonStatus }
}

const logout = () => {
    return { type: LOGOUT }
}
export const login = (email, password) =>

    async (dispatch, getStore) => {
    dispatch(buttonDisable(true))
       try {
        let result = await LoginAPI.loginMe(email, password);
        dispatch(setLoginResponse(result.data))
        repository.saveToken(result.data, )
        dispatch(buttonDisable(false))
      } catch (error){
        dispatch(setLoginResponse(error))
        dispatch(buttonDisable(false))  
        throw error
        }finally {
            dispatch(buttonDisable(false)) }     
    };

export const checkAutorization = () => async (dispatch) => {

let data = await repository.loadToken()
    if(data){
        dispatch(setLoginResponse(data))
    } else{

    }
}
export const setLogout = () => async (dispatch) => {

   await repository.saveToken(null)
    dispatch(logout())
}

    const repository = {
        saveToken(data){
            localStorage.setItem("data", JSON.stringify(data))
        },
        loadToken(){
            return JSON.parse(localStorage.getItem("data"))
        }
    }