

const initialState = {

};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_COMMON_INFO":
            return {

            }
        case "CHANGE_VARIETIES_INFO":
            return {

            }
        case "CHANGE_ESTIMATION_INFO":
            return {

            }
        case "CHANGE_KASSIR_INFO":
            return {

            }
        case "CHANGE_SOURCES_INFO":
            return {

            }
        default: return state
    }
};


// const isLoading = (info) => { return { type: CHANGE_SOURCES_INFO, info } }







    