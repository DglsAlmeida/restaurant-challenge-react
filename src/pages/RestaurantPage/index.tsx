// import restaurantLogo from '../../assets/restaurant-logo.png';
import "../../styles/restaurant-page.scss";
import { Input } from "../../components/Input";
import Modal from "react-modal";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import { CardFood } from "../../components/CardFood";
import { ModalContent } from "../../components/ModalContent";
import ModalCard, { ModalHandles } from "../../components/ModalCard";

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

Modal.setAppElement("#root");
const RestaurantPage = () => {
  const { id } = useParams<any>();

  // States to handle modal actions
  const [modalInfo, setModalInfo] = useState({} as Menu);
  const modalRef = useRef<ModalHandles>(null);

  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [menu, setMenu] = useState<Menu[]>([]);
  const [search, setSearch] = useState("");
  const [filteredFoods, setFilteredFoods] = useState<Menu[]>([]);

  useEffect(() => {
    async function getRestaurant() {
      const restaurantResponse = await api.get(`restaurants/${id}`);
      const restaurantMenuResponse = await api.get(`restaurants/${id}/menu`);

      setMenu(restaurantMenuResponse.data);
      setRestaurant(restaurantResponse.data);
    }
    getRestaurant();
  }, [id]);

  useEffect(() => {
    const filtered = menu.filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredFoods(filtered);
  }, [search, menu]);

  const openModal = (data: Menu) => {
    modalRef.current?.openModal();
    setModalInfo(data);
  }

  const closeModal = () => {
    modalRef.current?.closeModal()
  }

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
          <span>
            Segunda à Sexta <time>11:30</time> às <time>15:30</time>
          </span>
          <span>
            Sábados <time>11:30</time> às <time>22:00</time>
          </span>
          <span>
            Domingo e Feriados <time>11:30</time> às <time>15:00</time>
          </span>
        </div>
      </div>
      <Input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className="restaurant-food">
        {filteredFoods.map((food: any) => (
          <CardFood
            key={food.name}
            name={food.name}
            img={food.image}
            price={food.price}
            onClick={() => openModal(food)}
          />
        ))}
      </div>
      <ModalCard ref={modalRef}>
        <ModalContent modalInfo={modalInfo} handleCloseModal={closeModal}/>
      </ModalCard>
    </div>
  );
};

export default RestaurantPage;
