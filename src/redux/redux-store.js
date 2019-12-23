import { combineReducers, createStore, applyMiddleware } from "redux";

import thunkMiddleware from 'redux-thunk'
import AdminManagementReducer from "./admin-management-reducer";
import AdminCatalogReducer from "./admin-catalog-reducer";


let reducers = combineReducers({
    adminManagement: AdminManagementReducer,
    AdminCatalog: AdminCatalogReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store