import { handle } from 'redux-pack';
import get from 'lodash/get';
import * as t from './actionTypes';

export const initialState = {
  error: null,
  isLoaded: false,
  isLoading: false,
  list: [],
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case t.LOAD:
      return handle(state, action, {
        start: s => ({
          ...s,
          error: null,
          isLoading: true,
        }),
        failure: s => ({
          ...s,
          error: get(payload, ['response', 'data']),
          isLoading: false,
        }),
        success: s => ({
          ...s,
          isLoaded: true,
          isLoading: false,
          list: get(payload, ['data', 'items']) || [],
        })
      })
    default:
      return state;
  }
}