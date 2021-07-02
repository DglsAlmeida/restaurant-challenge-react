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
        const { product, quantity } = action.payload;
        
        const productExists = draft.items.findIndex(item => item.product.id === product.id);

        if(productExists >= 0) {
          draft.items[productExists].quantity = quantity;
        } else {
          draft.items.push({
            product,
            quantity,
          })
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