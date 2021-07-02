import "../../styles/header.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/">
          <span>Goomer</span>
        </Link>
        <Link to="/restaurant/cart">
          <AiOutlineShoppingCart size={28}/>
        </Link>
      </div>
    </header>
  );
};
