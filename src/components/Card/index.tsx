import { Link } from "react-router-dom";
import "../../styles/card.scss";

interface CardProps {
  img: string;
  name: string;
  description?: string;
  price?: number;
  path: string;
}

export const Card = ({ img, name, description, price, path }: CardProps) => {
  return (
    <Link to={path} className="card-content">
      <div className="card-img">
        <img src={img} alt="img" />
      </div>
      <div className="card-description">
        <span className="card-title">{name}</span>
        {description && <p>{description}</p>}
      </div>
    </Link>
  );
};
