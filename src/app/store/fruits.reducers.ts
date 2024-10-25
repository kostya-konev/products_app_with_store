import {AppState} from "./app.state";
import {createReducer, on} from "@ngrx/store";
import {loadFruitsSuccess} from "./fruits.actions";


export const initialState: AppState = {
  cart: [],
  fruits: [],
  vegetables: [],
}

export const fruitsReducer = createReducer(
  initialState,
  on(loadFruitsSuccess, (state: AppState, { fruits }) => {
    return { ...state, fruits }
  })
)
