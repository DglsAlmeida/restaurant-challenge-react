import { IProduct } from "./types";

export function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    }
  }
}

export function removeProduct(name: string) {
  return {
    type: 'REMOVE_PRODUCT',
    name,
  }
}

export function updateProductQuantity(name: string, quantity: number) {
  return {
    type: 'UPDATE_PRODUCT_QUANTITY',
    name,
    quantity,
  }
}