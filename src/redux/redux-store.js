import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import AdminCatalogReducer from "./admin-catalog-reducer";
import { registrationReducer } from "./registration-reducer";
import { loginReducer } from "./auth-reducer";
import ApplicationsReducer from "./applications-reducer";


let reducers = combineReducers({
    AdminCatalog: AdminCatalogReducer,
    registrationPage: registrationReducer,
    loginPage: loginReducer,
    applications: ApplicationsReducer

})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store