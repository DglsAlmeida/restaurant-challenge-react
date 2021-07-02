import { useSelector } from "react-redux"
import { IState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";

export const Cart = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);
  console.log(cart);

  return (
    <h1>Cart</h1>
  )
}
