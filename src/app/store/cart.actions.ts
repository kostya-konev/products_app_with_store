import {createAction, props} from "@ngrx/store";

export const addToCart = createAction("[Item] Add to cart", props<{item: any}>());
export const removeFromCart = createAction("[Item] Remove from cart", props<{item: any}>());
