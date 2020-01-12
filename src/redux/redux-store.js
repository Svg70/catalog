import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import AdminCatalogReducer from "./admin-catalog-reducer";
import { registrationReducer } from "./registration-reducer";
import { loginReducer } from "./auth-reducer";
import ApplicationsReducer from "./applications-reducer";
import StatisticsReducer from "./statistics-reducer";


let reducers = combineReducers({
    AdminCatalog: AdminCatalogReducer,
    registrationPage: registrationReducer,
    loginPage: loginReducer,
    applications: ApplicationsReducer,
    statistics: StatisticsReducer

})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store