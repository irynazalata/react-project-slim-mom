import { createAction } from "@reduxjs/toolkit"

const fetchDailyRateRequest = createAction("dailyRate/fetchRequest")
const fetchDailyRateSuccess = createAction("dailyRate/fetchSuccess")
const fetchDailyRateError = createAction("dailyRate/fetchError")

export default {

    fetchDailyRateRequest,
    fetchDailyRateSuccess,
    fetchDailyRateError
}