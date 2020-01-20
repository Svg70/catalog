import { StatisticsAPI } from "../dal/dal"
const GET_TOTAL_YEAR_COUNT = 'GET_TOTAL_YEAR_COUNT'
const GET_TOTAL_YEAR_NOMINAL_COUNT = 'GET_TOTAL_YEAR_NOMINAL_COUNT'
const IS_LOADING = 'IS_LOADING'

let initialstate = {
    totalYearCount: null,
    totalYearNominalCount: null,
    preloader: false
}

let StatisticsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_TOTAL_YEAR_COUNT: {
            let stateCopy = { ...state, totalYearCount: action.count }
            return stateCopy
        }
        case GET_TOTAL_YEAR_NOMINAL_COUNT: {
            let stateCopy = { ...state, totalYearNominalCount: action.count }
            return stateCopy
        }
        case IS_LOADING: {
            debugger
            return{...state, preloader: action.preloaderStatus}
        }
        default:
            return state
    }
}
export const getTotalYearCount = (count) => {
    return { type: GET_TOTAL_YEAR_COUNT, count }
}
export const getTotalYearNominalCount = (count) => {
    return { type: GET_TOTAL_YEAR_NOMINAL_COUNT, count }
}
const isLoading = (preloaderStatus) =>{
    return{ type: IS_LOADING, preloaderStatus}
}

export const getTotalYearCountThunk = (year, upravl) => async (dispatch) => {

    if ((year >= 1843 && year <= 1865) || (year >= 1895 && year <= 1928)) {
        isLoading(true)
        let totalCount = await StatisticsAPI.yearTotalCount(year, upravl)
        dispatch(getTotalYearCount(totalCount))
        isLoading(false)
    }
    if (year >= 1866 && year <= 1895) {
        isLoading(true)
        let totalCount = await StatisticsAPI.year1866TotalCount(year)
        dispatch(getTotalYearCount(totalCount))
        isLoading(false)
    }
}
export const getTotalYearNominalCountThunk = (year,nominal, upravl) => async (dispatch) => {
    if ((year >= 1843 && year <= 1865) || (year >= 1895 && year <= 1928)) {
        isLoading(true)
        let totalCount = await StatisticsAPI.yearNominalTotalCount(year, nominal, upravl)
        dispatch(getTotalYearNominalCount(totalCount))
        isLoading(false)
    }
    if (year >= 1866 && year <= 1895) {
        isLoading(true)
        let totalCount = await StatisticsAPI.yearNominal1866TotalCount(year, nominal)
        dispatch(getTotalYearNominalCount(totalCount))
        isLoading(false)
    }
}

export default StatisticsReducer