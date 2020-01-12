import { StatisticsAPI } from "../dal/dal"

const GET_TOTAL_YEAR_COUNT = 'GET_TOTAL_YEAR_COUNT'
const GET_TOTAL_YEAR_NOMINAL_COUNT = 'GET_TOTAL_YEAR_NOMINAL_COUNT'

let initialstate = {
    totalYearCount: null,
    totalYearNominalCount: null
}

let StatisticsReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_TOTAL_YEAR_COUNT: {
            debugger
            let stateCopy = { ...state, totalYearCount: action.count }
            return stateCopy
        }
        case GET_TOTAL_YEAR_NOMINAL_COUNT: {
            let stateCopy = { ...state, totalYearNominalCount: action.count }
            return stateCopy
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
export const getTotalYearCountThunk = (year) => async (dispatch) => {
    if (year >= 1843 && year <= 1865) {
        let totalCount = await StatisticsAPI.yearTotalCount(year)
        debugger
        dispatch(getTotalYearCount(totalCount))
    }
    if (year >= 1866 && year <= 1895) {
        let totalCount = await StatisticsAPI.year1866TotalCount(year)
        dispatch(getTotalYearCount(totalCount))
    }
}
export const getTotalYearNominalCountThunk = (year,nominal) => async (dispatch) => {
    if (year >= 1843 && year <= 1865) {
        let totalCount = await StatisticsAPI.yearNominalTotalCount(year, nominal)
        dispatch(getTotalYearNominalCount(totalCount))
    }
    if (year >= 1866 && year <= 1895) {
        let totalCount = await StatisticsAPI.yearNominal1866TotalCount(year, nominal)
        dispatch(getTotalYearNominalCount(totalCount))
    }
}

export default StatisticsReducer