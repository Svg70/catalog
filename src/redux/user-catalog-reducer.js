const SET_FORM_TO_STATE = 'SET_FORM_TO_STATE'

let initialstate = {
}

let UserCatalogReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_FORM_TO_STATE: {
            
        }
        default:
            return state
    }
}


export default UserCatalogReducer