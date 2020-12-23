import { createReducer } from '@reduxjs/toolkit';
import setDate from './calendarAction';

const dateReducer = createReducer('', {
  [setDate]: (state, action) => action.payload
})

export default dateReducer