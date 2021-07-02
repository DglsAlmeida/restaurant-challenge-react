import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../store";
import foodImg from "../../assets/food.png";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ICartItem } from "../../store/modules/cart/types";
import { FaTrashAlt } from "react-icons/fa";
import "../../styles/cart.scss";
import formatValue from "../../utils/formatValue";
import { removeProduct, updateProductQuantity } from "../../store/modules/cart/actions";

export const Cart = () => {
  const cart = useSelector<IState, ICartItem[]>((state) => state.cart.items);
  const dispatch = useDispatch();

  function handleRemoveProduct(name: string) {
    dispatch(removeProduct(name))
  }

  function incrementQuantity(item: ICartItem) {
    dispatch(updateProductQuantity(item.product.name, item.quantity + 1))
  }
  
  function decrementQuantity(item: ICartItem) {
    dispatch(updateProductQuantity(item.product.name, item.quantity - 1))
  }

  return (
    <>
      {cart.length > 0 ? (
      <>
        {cart.map(item => (
          <div key={item.product.name} className="cart-content">
            <div className="cart-img">
              <img src={item.product.image ? item.product.image : foodImg} alt="food" />
            </div>
            <div className="cart-description">
              <span>{item.product.name}</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
            </div>
            <div className="cart-quantity-and-trash">
              <div className="cart-button-add-quantity-content">
                <button onClick={() => decrementQuantity(item)}>
                  <AiOutlineMinus size={30} />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item)}>
                  <AiOutlinePlus size={30} />
                </button>
              </div>
              <button className="cart-button-trash" onClick={() => handleRemoveProduct(item.product.name)}>
                <FaTrashAlt size={32} />
              </button>
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span>{formatValue((item.product.price * item.quantity))}</span>
            </div>
          </div>
        ))}
      </>
      ) : (
        <h1 className="cart-empty">Carrinho vazio</h1>
      )}
    </>
  );
};
