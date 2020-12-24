import { createReducer } from '@reduxjs/toolkit';
import notificationActions from './notificationActions';

const notification = createReducer(false, {
  [notificationActions.notificationTrue]: () => true,
  [notificationActions.notificationFalse]: () => false,
});

export default notification;
