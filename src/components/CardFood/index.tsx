import '../../styles/card-food.scss';
import foodImg from '../../assets/food.png'
import { ButtonHTMLAttributes } from 'react';
import formatValue from '../../utils/formatValue';

interface CardFoodProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  img: string;
  name: string;
  description?: string;
  price?: number;
}

export const CardFood = ({ img, name, description, price, ...rest }: CardFoodProps) => {
  return (
      <button className="card-food-content" {...rest}>
        <div className="card-food-img">
          <img src={img ? img : foodImg} alt="food-img" />
        </div>
        <div className="card-food-description">
          <span className="card-food-title">{name}</span>
          <p>{description ? description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}</p>
          <span>{price ? formatValue(price): formatValue(19.20)}</span>
        </div>
      </button>
  )
}