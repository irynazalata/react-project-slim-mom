import axios from "axios"
import dailyRateActions from "./dailyRateActions"

axios.defaults.baseURL = "https://slimmom-backend.herokuapp.com/";

//TODO: should token be here as well?
//Where should auth check be held for dailyRate and calc componenets? || in axios?

const onFetchDailyRates = (weight, height, age, desiredWeight, bloodType) => (dispatch) => {
    dispatch(dailyRateActions.fetchDailyRateRequest())
  
    axios
      .post("/daily-rate")
      .then((receivedData) =>
        dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data))
      )
      .catch((error) => dispatch(dailyRateActions.fetchDailyRateError(error)))
  }


  const onFetchDailyRatesAuthorised = (weight, height, age, desiredWeight, bloodType) => (dispatch) => {
    dispatch(dailyRateActions.fetchDailyRateRequest())
  
    axios
      .post("/daily-rate/{userId}")
      .then((receivedData) =>
        dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data))
      )
      .catch((error) => dispatch(dailyRateActions.fetchDailyRateError(error)))
  }

  export default {
    onFetchDailyRates,
    onFetchDailyRatesAuthorised
  }