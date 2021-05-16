import { createReducer, on } from "@ngrx/store";
import { setError } from "./app.actions";
import { AppState } from "./app.state";

export const initialState: AppState = {
  error: "",
};

export const appReducer = createReducer(
  initialState,
  on(setError, (state, { error }) => {
    return { ...state, error }
  })
);
