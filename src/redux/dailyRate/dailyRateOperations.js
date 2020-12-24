import axios from "axios"
import {useSelector} from "react-redux"
import dailyRateActions from "./dailyRateActions"
import authSelectors from "../auth/authSelectors"

axios.defaults.baseURL = "https://slimmom-backend.herokuapp.com";



const onFetchDailyRates = (values) => (dispatch) => {
    dispatch(dailyRateActions.fetchDailyRateRequest())
  
    axios
      .post("/daily-rate", values)
      .then((receivedData) =>
        {console.log(receivedData.data);
            dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data))}
      )
      .catch((error) => dispatch(dailyRateActions.fetchDailyRateError(error)))
  }


  const onFetchDailyRatesAuthorised = (values, userId) => (dispatch) => {
    dispatch(dailyRateActions.fetchDailyRateRequest())
  
    axios
      .post(`/daily-rate/${userId}`, values)
      .then((receivedData) =>
        dispatch(dailyRateActions.fetchDailyRateSuccess(receivedData.data))
      )
      .catch((error) => dispatch(dailyRateActions.fetchDailyRateError(error)))
  }

  export default {
    onFetchDailyRates,
    onFetchDailyRatesAuthorised
  }