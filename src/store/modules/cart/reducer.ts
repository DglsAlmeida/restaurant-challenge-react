import produce from "immer";
import { Reducer } from "redux";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  items: []
}

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case 'ADD_PRODUCT_TO_CART': {
        const { product } = action.payload;
        
        const productIndex = draft.items.findIndex(item => item.product.name === product.name);

        if(productIndex >= 0) {
          draft.items[productIndex].quantity++;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          })
        }
        break
      }
      case 'REMOVE_PRODUCT': {
        const productIndex = draft.items.findIndex(item => item.product.name === action.name);

        if(productIndex >= 0) {
          draft.items.splice(productIndex, 1)
        }

        break
      }
      case 'UPDATE_PRODUCT_QUANTITY': {
        const productIndex = draft.items.findIndex(item => item.product.name === action.name);

        if(productIndex >= 0 && action.quantity >= 1) {
          draft.items[productIndex].quantity = Number(action.quantity);
        } else {
          return draft;
        }

        break
      }
      default: {
        return draft
      }
    }
  })
}

export default cart;