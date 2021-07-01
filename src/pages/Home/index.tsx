import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import "../../styles/home.scss";
import { useEffect, useState } from "react";
import api from "../../services/api";

interface Restaurant {
  id: number;
  image: string;
  name: string;
  address: string;
}

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );

  useEffect(() => {
    async function getDatas() {
      const response = await api.get("restaurants");
      setRestaurants(response.data);
    }

    getDatas();
  }, []);

  useEffect(() => {
    const filtered = restaurants.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredRestaurants(filtered);
  }, [search, restaurants]);

  return (
    <div className="home">
      <span className="home-title">Bem vindo ao lista Rango</span>
      <Input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className="home-restaurants">
        {filteredRestaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            name={restaurant.name}
            img={restaurant.image}
            description={restaurant.address}
            path={`${restaurant.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
