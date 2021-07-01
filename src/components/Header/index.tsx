import "../../styles/header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <Link to="/">
          <span>Goomer</span>
        </Link>
      </div>
    </header>
  );
};
