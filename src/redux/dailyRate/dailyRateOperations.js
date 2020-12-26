import axios from "axios"
import dailyRateActions from "./dailyRateActions"

axios.defaults.baseURL = "https://slimmom-backend.goit.global"

const onFetchDailyRates = (values) => (dispatch) => {
  dispatch(dailyRateActions.fetchDailyRateRequest())

  axios
    .post("/daily-rate", values)
    .then((receivedData) => {
      dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data))
    })
    .catch((error) => {
      dispatch(dailyRateActions.fetchDailyRateError(error))
    })
}

const onFetchDailyRatesAuthorised = (values, userId) => (dispatch) => {
  dispatch(dailyRateActions.fetchDailyRateRequestAuth())

  axios
    .post(`/daily-rate/${userId}`, values)
    .then((receivedData) => {
      dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data))
    })
    .catch((error) => {
      dispatch(dailyRateActions.fetchDailyRateErrorAuth(error))
    })
}

export default {
  onFetchDailyRates,
  onFetchDailyRatesAuthorised,
}
