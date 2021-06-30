import '../../styles/card-food.scss';
import foodImg from '../../assets/food.png'

interface CardFoodProps {
  img: string;
  name: string;
  description?: string;
  price?: number;
}

export const CardFood = ({ img, name, description, price }: CardFoodProps) => {
  return (
      <button className="card-food-content">
        <div className="card-food-img">
          <img  src={img ? img : foodImg} alt="img" />
        </div>
        <div className="card-food-description">
          <span className="card-food-title">{name}</span>
          <p>{description ? description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do'}</p>
          <span>
            {price ? (
              Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
               }).format(price)
            ): Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
             }).format(19.20)}
          </span>
        </div>
      </button>
  )
}