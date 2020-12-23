import { createReducer } from '@reduxjs/toolkit';
import calendarAction from './calendarAction';

const dateReducer = createReducer('', {
  [calendarAction]: (state, action) => action.payload
})

export default dateReducer