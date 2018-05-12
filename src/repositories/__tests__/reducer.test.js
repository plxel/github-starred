import { LIFECYCLE } from "redux-pack";
import { makeReduxPackAction } from "../../testUtils";
import reducer, { initialState } from "../reducer";
import * as t from "../actionTypes";
import mockGithubResponse from "../__mocks__/mockGithubResponse";

describe("repositories reducer", () => {
  it("dispatching LOAD start loading repositories", () => {
    const beforeState = {
      ...initialState
    };

    const expectedState = {
      ...initialState,
      isLoading: true
    };

    const action = makeReduxPackAction(LIFECYCLE.START, { type: t.LOAD });
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedState);
  });

  it("dispatching LOAD loads repositories list", () => {
    const beforeState = {
      ...initialState,
      isLoading: true
    };
    const expectedAfterState = {
      ...beforeState,
      isLoaded: true,
      isLoading: false,
      list: mockGithubResponse.data.items
    };
    const action = makeReduxPackAction(LIFECYCLE.SUCCESS, {
      type: t.LOAD,
      payload: mockGithubResponse
    });
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });

  it("dispatching LOAD handles failure", () => {
    const beforeState = {
      ...initialState,
      isLoading: true
    };
    const expectedAfterState = {
      ...beforeState,
      isLoaded: false,
      isLoading: false,
      error: { message: "test error" }
    };
    const action = makeReduxPackAction(LIFECYCLE.FAILURE, {
      type: t.LOAD,
      payload: { response: { data: { message: "test error" } } }
    });
    const afterState = reducer(beforeState, action);

    expect(afterState).toMatchObject(expectedAfterState);
  });
});
