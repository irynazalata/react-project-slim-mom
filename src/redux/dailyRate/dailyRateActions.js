import { createAction } from "@reduxjs/toolkit"

const fetchDailyRateRequest = createAction("dailyRate/fetchRequest")
const fetchDailyRateSuccess = createAction("dailyRate/fetchSuccess")
const fetchDailyRateError = createAction("dailyRate/fetchError")

const fetchDailyRateRequestAuth = createAction("dailyRate/fetchRequestAuth")
const fetchDailyRateSuccessAuth = createAction("dailyRate/fetchSuccessAuth")
const fetchDailyRateErrorAuth = createAction("dailyRate/fetchErrorAuth")
export default {

    fetchDailyRateRequest,
    fetchDailyRateSuccess,
    fetchDailyRateError,

    fetchDailyRateRequestAuth,
    fetchDailyRateSuccessAuth,
    fetchDailyRateErrorAuth,


}


//*Before Error Handling

// import { createAction } from "@reduxjs/toolkit"

// const fetchDailyRateRequest = createAction("dailyRate/fetchRequest")
// const fetchDailyRateSuccess = createAction("dailyRate/fetchSuccess")
// const fetchDailyRateError = createAction("dailyRate/fetchError")

// export default {

//     fetchDailyRateRequest,
//     fetchDailyRateSuccess,
//     fetchDailyRateError
// }