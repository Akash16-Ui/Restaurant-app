import * as types from "../Action/Constant"

export const getDetails = (state =[], action) => {
    switch (action.type) {
        case types.GET_BANNER_DATA:
            return {
                ...state,
                item: action.list.listRestaurants,
                count : action.list.restaurantCount
            }
        default:
            return state
    }
}