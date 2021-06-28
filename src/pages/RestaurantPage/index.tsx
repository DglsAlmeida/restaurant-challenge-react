import restaurantLogo from '../../assets/restaurant-logo.png';
import '../../styles/home.scss';
import { Input } from '../../components/Input';
import { Accordion } from '../../components/Accordion';

const RestaurantPage = () => {
  return (
    <div className="restaurant-container">
      <div className="restaurant-content">
        <img src={restaurantLogo} alt="" />
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
        <h1>Almoços</h1>
      </Accordion>
      <Accordion 
        title="Bebidas"
      >
        <h1>Bebidas</h1>
      </Accordion>
      <Accordion 
        title="Sobremesas"
      >
        <h1>Sobremesas</h1>
      </Accordion>
    </div>
  )
}

export default RestaurantPage;