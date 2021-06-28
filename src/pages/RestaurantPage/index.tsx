import restaurantLogo from '../../assets/restaurant-logo.png';
import '../../styles/home.scss';
import { Input } from '../../components/Input';
import { Accordion } from '../../components/Accordion';
import { Card } from '../../components/Card/index';
import foodImg from '../../assets/food.png';

const RestaurantPage = () => {
  return (
    <div className="restaurant-container">
      <div className="restaurant-content">
        <img src={restaurantLogo} alt="restaurant logo" />
        <div className="restaurant-description">
          <span className="restaurant-title">Nome do Restaurante</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, set do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <span>Segunda à Sexta <time>11:30</time> às <time>15:30</time></span>
          <span>Sábados <time>11:30</time> às <time>22:00</time></span>
          <span>Domingo e Feriados <time>11:30</time> às <time>15:00</time></span>
        </div>
      </div>
      <Input />
      <Accordion 
        title="Almoços"
      >
        <>
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
           <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
        </>
      </Accordion>
      <Accordion 
        title="Bebidas"
      >
        <>
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
        </>
      </Accordion>
      <Accordion 
        title="Sobremesas"
      >
        <>
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
          <Card 
            img={foodImg} 
            name="Nome Restaurante" 
          />
        </>
      </Accordion>
    </div>
  )
}

export default RestaurantPage;