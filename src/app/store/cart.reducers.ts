import {createReducer, on} from "@ngrx/store";
import {AppState} from "./app.state";
import {addToCart, removeFromCart} from "./cart.actions";

export const initialState: AppState = {
  cart: [],
  fruits: [],
  vegetables: []
}

export const cartReducer = createReducer(
  initialState,
  on(addToCart, (state: AppState, {item}) => {
    return {...state, cart: [...state.cart, item]}
  }),
  on(removeFromCart, (state: AppState, {item}) => {
    const indexToRemove = state.cart.findIndex((cartItem: any) => cartItem.id === item.id);

    if (indexToRemove !== -1) {
      const updatedCart = [...state.cart];
      updatedCart.splice(indexToRemove, 1);
      return {
        ...state,
        cart: updatedCart
      };
    }

    return state;
  }),
)
