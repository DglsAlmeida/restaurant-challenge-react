export interface IProduct {
  id?: number;
  name: string;
  image: string
  price: string;
}

export interface ICartItem {
  product: IProduct;
}

export interface ICartState {
  items: ICartItem[];
}