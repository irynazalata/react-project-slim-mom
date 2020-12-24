import { createReducer } from '@reduxjs/toolkit';
import errorActions from './errorActions';

const error = createReducer(false, {
  [errorActions.errorTrue]: () => true,
  [errorActions.errorFalse]: () => false,
});

export default error;
