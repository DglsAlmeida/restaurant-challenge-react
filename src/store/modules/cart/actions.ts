import { IProduct } from "./types";

export function addProductToCart(product: IProduct, quantity: number) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
      quantity,
    }
  }
}