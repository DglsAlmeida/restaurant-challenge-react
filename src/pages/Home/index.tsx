import { Card } from "../../components/Card"
import { Input } from "../../components/Input"
import '../../styles/home.scss'
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

interface Restaurant {
  id: number;
  image: string;
  name: string;
  address: string;
}

const Home = () => {
  const [ restaurants, setRestaurants ] = useState<Restaurant[]>([]);

  useEffect(() => {
    async function getDatas() {
      const response = await api.get("restaurants");
      setRestaurants(response.data);
    }

    getDatas();
  }, [])

  return (
    <div className="home">
      <span className="home-title">Bem vindo ao lista Rango</span>
      <Input />
      <div className="home-restaurants">
        {restaurants.map(restaurant => (
        <Link to={`${restaurant.id}`}>
          <Card 
            key={restaurant.id}
            name={restaurant.name}
            img={restaurant.image}
            description={restaurant.address}
          />
        </Link>
        ))}
      </div>
    </div>
  )
}

export default Home;