import "../../styles/header.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from "react-redux";
import { IState } from "../../store";
import { ICartItem } from "../../store/modules/cart/types";

export const Header = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items);

  return (
    <header className="header-container">
      <div className="link-logo">
        <Link to="/">
          <span>Goomer</span>
        </Link>
      </div>
      <div className="link-cart">
        <Link to="/restaurant/cart">
          <AiOutlineShoppingCart size={38}/>
        </Link>
        {cart.length > 0 ? <div className="items-quantity">{cart.length}</div> : <div />}
      </div>
    </header>
  );
};
