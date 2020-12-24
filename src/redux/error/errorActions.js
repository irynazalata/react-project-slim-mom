import { createAction } from '@reduxjs/toolkit';

const errorTrue = createAction('error/errorTrue');
const errorFalse = createAction('error/errorFalse');

export default {
  errorTrue,
  errorFalse,
};
