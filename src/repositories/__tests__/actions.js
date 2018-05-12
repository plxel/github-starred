import axios from 'axios';
import * as actions from '../actions';
import * as t from '../actionTypes';

describe('repositories actions', () => {
  it('load returns LOAD action type', () => {
    expect(actions.load().type).toBe(t.LOAD);
  })
})