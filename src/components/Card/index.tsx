import '../../styles/card.scss';
// import foodImg from '../../assets/food.png';

interface CardProps {
  img: string;
  name: string;
  description?: string;
  price?: string;
}

export const Card = ({ img, name, description, price}: CardProps) => {
  return (
    <a href="/" className="card-content">
      <img className="card-img" src={img} alt="food" />
      <div className="card-description">
        <span className="card-title">{name}</span>
        <p>
          Lorem ipsum dolor sit amet
          consectetur adipiscing elit,sed do
        </p>
        <span>R$ 19,90</span>
      </div>
    </a>
  )
}