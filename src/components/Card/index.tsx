import '../../styles/card.scss';

interface CardProps {
  img: string;
  name: string;
  description?: string;
  price?: string;
}

export const Card = ({ img, name, description, price}: CardProps) => {
  return (
    <a href="/" className="card-content">
      <img className="card-img" src={img} alt="img" />
      <div className="card-description">
        <span className="card-title">{name}</span>
        { description && <p>{description}</p> }
        { price && <span>R$ 19,90</span> }
      </div>
    </a>
  )
}