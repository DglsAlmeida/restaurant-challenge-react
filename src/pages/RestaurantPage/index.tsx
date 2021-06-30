// import restaurantLogo from '../../assets/restaurant-logo.png';
import '../../styles/restaurant-page.scss';
import { Input } from '../../components/Input';
import { Accordion } from '../../components/Accordion';
import { Card } from '../../components/Card/index';
// import { Menu } from '../../components/Menu/index';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { CardFood } from '../../components/CardFood';

interface Restaurant {
  id: number;
  image: string;
  name: string;
  address: string;
}

interface Menu {
  group: string;
  image: string;
  name: string;
  price: number;
}

const RestaurantPage = () => {

  const { id } = useParams<any>();
  
  const [ restaurant, setRestaurant ] = useState<Restaurant>();
  const [ menu, setMenu ] = useState<any[]>([]);

  useEffect(() => {
    async function getRestaurant() {
      const restaurantResponse = await api.get(`restaurants/${id}`);
      const restaurantMenuResponse = await api.get(`restaurants/${id}/menu`);
     
      setMenu(restaurantMenuResponse.data);
      setRestaurant(restaurantResponse.data);
    }
    getRestaurant();
  }, [id]);

  return (
    <div className="restaurant-container">
      <div className="restaurant-content">
        <img src={restaurant?.image} alt="restaurant logo" />
        <div className="restaurant-description">
          <span className="restaurant-title">{restaurant?.name}</span>
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
      <div className="restaurant-food">
        {menu.map(food => (
            <CardFood
              key={food.name}
              name={food.name}
              img={food.image}
              price={food.price}
            />
        ))} 
      </div>
    </div>
  )
}

export default RestaurantPage;