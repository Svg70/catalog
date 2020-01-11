import { dal, TableAPI, NumbersEditingAPI } from "../dal/dal"



const SET_CATALOG_LIST = 'SET_CATALOG_LIST'
const SET_CATALOG_LIST_43 = 'SET_CATALOG_LIST_43'
const SET_CATALOG_LIST_58 = 'SET_CATALOG_LIST_58'
const SET_CATALOG_LIST_63 = 'SET_CATALOG_LIST_63'
const SET_CATALOG_LIST_66 = 'SET_CATALOG_LIST_66'
const SET_CATALOG_LIST_66_A = 'SET_CATALOG_LIST_66_A'
const SET_CATALOG_LIST_66_B = 'SET_CATALOG_LIST_66_B'
const SET_CATALOG_LIST_66_C = 'SET_CATALOG_LIST_66_C'
const IS_LOADING = 'IS_LOADING'
const SET_AUTH = 'SET_AUTH'
const BUTTON_DISABLE = 'BUTTON_DISABLE'


let initialstate = {
    preloader: true,
    buttonDisable: false,
    catalogItems43:[],
    catalogItems:[],
    catalogItems58:[],
    catalogItems63:[],
    catalogItems66:[],
    catalogItems66a:[],
    catalogItems66b:[],
    catalogItems66c:[]
}

let AdminCatalogReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_CATALOG_LIST: {

            let stateCopy = { ...state, catalogItems: action.response }
            return stateCopy
        }
        case SET_CATALOG_LIST_43: {

            let stateCopy = { ...state, catalogItems43: action.response }
            return stateCopy
        }
        case SET_CATALOG_LIST_58: {

            let stateCopy = { ...state, catalogItems58: action.response }
            return stateCopy
        }
        case SET_CATALOG_LIST_63: {

            let stateCopy = { ...state, catalogItems63: action.response }
            return stateCopy
        }
        case SET_CATALOG_LIST_66: {

            let stateCopy = { ...state, catalogItems66: action.response }
            return stateCopy
        }
        case SET_CATALOG_LIST_66_A: {

            let stateCopy = { ...state, catalogItems66a: action.response }
            return stateCopy
        }
        case SET_CATALOG_LIST_66_B:{
            let stateCopy = { ...state, catalogItems66b: action.response }
            return stateCopy
        }
        case SET_CATALOG_LIST_66_C:{
            let stateCopy = { ...state, catalogItems66c: action.response }
            return stateCopy
        }
        case IS_LOADING: {
            let stateCopy = { ...state, preloader: action.loadingStatus }
            return stateCopy
        }
        case BUTTON_DISABLE: {

            let stateCopy = { ...state, buttonDisable: action.buttonStatus }
            return stateCopy
        }
        case SET_AUTH: {
            let stateCopy = { ...state, adminIsAuth: action.loginStatus }
            return stateCopy
        }
        default:
            return state
    }
}

const buttonDisabledAC = (buttonStatus) => {
    return{type: BUTTON_DISABLE, buttonStatus}
}
const setCatalogList = (response) => {

    return { type: SET_CATALOG_LIST, response }
}
const setCatalogList43 = (response) => {
    return { type: SET_CATALOG_LIST_43, response }
}
const setCatalogList58 = (response) => {
    return { type: SET_CATALOG_LIST_58, response }
}
const setCatalogList63 = (response) => {
    return { type: SET_CATALOG_LIST_63, response }
}
const setCatalogList66 = (response) => {
    return { type: SET_CATALOG_LIST_66, response }
}
const setCatalogList66a = (response) => {
    return { type: SET_CATALOG_LIST_66_A, response }
}
const setCatalogList66b = (response) => {
    return { type: SET_CATALOG_LIST_66_B, response }
}
const setCatalogList66c = (response) => {
    return { type: SET_CATALOG_LIST_66_C, response }
}
const isLoading = (loadingStatus) => {
    return { type: IS_LOADING, loadingStatus }
}

export const setAuth = (loginStatus) => {
    return { type: SET_AUTH, loginStatus }
}


export const getCatalogList = (table) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        dal.getItems(table).then(response => {
            dispatch(setCatalogList(response.data[0].catalogItems),
                dispatch(isLoading(false)))
            }
        )
    }
}
export const getCatalogList43 = (table) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        dal.getItems(table).then(response => {
            dispatch(setCatalogList43(response.data[0].catalogItems),
                dispatch(isLoading(false)))
            }
        )
    }
}
export const getCatalogList58 = (table) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        dal.getItems(table).then(response => {
            dispatch(setCatalogList58(response.data[0].catalogItems),
                dispatch(isLoading(false)))
            }
        )
    }
}

export const getCatalogList63 = (table) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        dal.getItems(table).then(response => {
            dispatch(setCatalogList63(response.data[0].catalogItems),
                dispatch(isLoading(false)))
            }
        )
    }
}
export const getCatalogList66 = (table) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        dal.getItems(table).then(response => {
            dispatch(setCatalogList66(response.data[0].catalogItems),
                dispatch(isLoading(false)))
            }
        )
    }
}
export const getCatalogList66a = (table) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        dal.getItems(table).then(response => {
            dispatch(setCatalogList66a(response.data[0].catalogItems),
                dispatch(isLoading(false)))
            }
        )
    }
}
export const getCatalogList66b = (table) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        dal.getItems(table).then(response => {
            dispatch(setCatalogList66b(response.data[0].catalogItems),
                dispatch(isLoading(false)))
            }
        )
    }
}
export const getCatalogList66c = (table) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        dal.getItems(table).then(response => {
            dispatch(setCatalogList66c(response.data[0].catalogItems),
                dispatch(isLoading(false)))
            }
        )
    }
}

// export const changeDataBaseCeilInfo = (nominal, number, common, varieties) =>
//     async (dispatch) => {
//         await dal.changeDataBaseCeil(nominal, number, common, varieties)
//         console.log('change in dataBase made')
//         // dal.getItems().then(dispatch(getCatalogList()))
//     }
const tableChange = (year, dispatch, response) => {
    if(year>=1843 && year <=1854)dispatch(setCatalogList43(response.data.catalogItems))
        if(year>=1855 && year <=1857)dispatch(setCatalogList(response.data.catalogItems))
        if(year>=1858 && year <=1862)dispatch(setCatalogList58(response.data.catalogItems))
        if(year>=1863 && year <=1865)dispatch(setCatalogList63(response.data.catalogItems))
        if(year>=1866 && year <=1895)dispatch(setCatalogList66(response.data.catalogItems))
}
export const changeDescriptionCells = (id, year, nominal, number, common, varieties, astimation, addInfo, sourses, status,  photo1, photo2) =>

    async (dispatch, getStore) => {
   
        dispatch(buttonDisabledAC(true))
        let response = await TableAPI.changeDescriptionCells(id, year, nominal, number, common, varieties, astimation, addInfo, sourses, status,  photo1, photo2)
        
        if(year>=1843 && year <=1854)dispatch(setCatalogList43(response.data.catalogItems))
        if(year>=1855 && year <=1857)dispatch(setCatalogList(response.data.catalogItems))
        if(year>=1858 && year <=1862)dispatch(setCatalogList58(response.data.catalogItems))
        if(year>=1863 && year <=1865)dispatch(setCatalogList63(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=1 && id<=20)dispatch(setCatalogList66(response.data.catalogItems))
      
        if(year>=1866 && year <=1895 && id>=21 && id<=40)dispatch(setCatalogList66a(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=41 && id<=60)dispatch(setCatalogList66b(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=61 && id<=78)dispatch(setCatalogList66c(response.data.catalogItems))
        dispatch(buttonDisabledAC(false))
    };

export const changeDescriptionPhotos = (id, year, nominal, number, photo1, photo2) =>
    
    async (dispatch, getStore) => {
        
        dispatch(buttonDisabledAC(true))
        let response = await TableAPI.changeDescriptionPhotos(id, year, nominal, number, photo1, photo2)
        debugger
        if(year>=1843 && year <=1854)dispatch(setCatalogList43(response.data.catalogItems))
        if(year>=1855 && year <=1857)dispatch(setCatalogList(response.data.catalogItems))
        if(year>=1858 && year <=1862)dispatch(setCatalogList58(response.data.catalogItems))
        if(year>=1863 && year <=1865)dispatch(setCatalogList63(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=1 && id<=20)dispatch(setCatalogList66(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=21 && id<=40)dispatch(setCatalogList66a(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=41 && id<=60)dispatch(setCatalogList66b(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=61 && id<=78)dispatch(setCatalogList66c(response.data.catalogItems))
        dispatch(buttonDisabledAC(false))
    };
export const numberEditRequest = (id, year, nominal, number, itemNumber, itemNumberInfo, itemNumberPhoto1, itemNumberPhoto2 ) => 
    async (dispatch, getStore) =>{
        dispatch(buttonDisabledAC(true))
        let response = await NumbersEditingAPI.numberEdit(id, year, nominal, number, itemNumber, itemNumberInfo, itemNumberPhoto1, itemNumberPhoto2 )
        if(year>=1843 && year <=1854)dispatch(setCatalogList43(response.data.catalogItems))
        if(year>=1855 && year <=1857)dispatch(setCatalogList(response.data.catalogItems))
        if(year>=1858 && year <=1862)dispatch(setCatalogList58(response.data.catalogItems))
        if(year>=1863 && year <=1865)dispatch(setCatalogList63(response.data.catalogItems)) 
        if(year>=1866 && year <=1895 && id>=1 && id<=20)dispatch(setCatalogList66(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=21 && id<=40)dispatch(setCatalogList66a(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=41 && id<=60)dispatch(setCatalogList66b(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=61 && id<=78)dispatch(setCatalogList66c(response.data.catalogItems))
        dispatch(buttonDisabledAC(false))
    }
export const numberDeleteRequest = (id, year, nominal, number, itemNumber) => 
    async (dispatch, getStore) =>{
        dispatch(buttonDisabledAC(true))
        let response = await NumbersEditingAPI.numberDelete(id, year, nominal, number, itemNumber)
        if(year>=1843 && year <=1854)dispatch(setCatalogList43(response.data.catalogItems))
        if(year>=1855 && year <=1857)dispatch(setCatalogList(response.data.catalogItems))
        if(year>=1858 && year <=1862)dispatch(setCatalogList58(response.data.catalogItems))
        if(year>=1863 && year <=1865)dispatch(setCatalogList63(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=1 && id<=20)dispatch(setCatalogList66(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=21 && id<=40)dispatch(setCatalogList66a(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=41 && id<=60)dispatch(setCatalogList66b(response.data.catalogItems))
        if(year>=1866 && year <=1895 && id>=61 && id<=78)dispatch(setCatalogList66c(response.data.catalogItems))
        dispatch(buttonDisabledAC(false))
    }




export default AdminCatalogReducer