
export const getDetails = (details) => {
    console.log(details)
    return {
        type : "GET_BANNER_DATA",
        list : details
    }
}
