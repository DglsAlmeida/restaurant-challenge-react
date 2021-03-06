// import restaurantLogo from '../../assets/restaurant-logo.png';
import "../../styles/restaurant-page.scss";
import { Input } from "../../components/Input";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import { ModalContent } from "../../components/ModalContent";
import ModalCard, { ModalHandles } from "../../components/ModalCard";
import { Accordion } from "../../components/Accordion";

interface Restaurant {
  id: number;
  image: string;
  name: string;
  address: string;
  hours: {
    days: number[];
    from: string;
    to: string;
  }[];
}

export interface Menu {
  group: string;
  image: string;
  name: string;
  price: number;
}

const RestaurantPage = () => {
  const { id } = useParams<any>();

  const [modalInfo, setModalInfo] = useState({} as Menu);
  const modalRef = useRef<ModalHandles>(null);

  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [menu, setMenu] = useState<Menu>({} as Menu);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getRestaurant() {
      const restaurantResponse = await api.get(`restaurants/${id}`);
      const restaurantMenuResponse = await api.get(`restaurants/${id}/menu`);

      const filteredMenu = restaurantMenuResponse.data.reduce(
        (accumulator: any, currentValue: any) => {
          const group = currentValue.group;

          if (!accumulator.hasOwnProperty(group)) {
            accumulator[group] = [];
          }
          accumulator[group].push({
            name: currentValue.name,
            price: currentValue.price,
            image: currentValue.image,
          });
          return accumulator;
        },
        {}
      );

      setMenu(filteredMenu);
      setRestaurant(restaurantResponse.data);
    }
    getRestaurant();
  }, [id]);

  const openModal = (data: Menu) => {
    modalRef.current?.openModal();
    setModalInfo(data);
  };

  const closeModal = () => {
    modalRef.current?.closeModal();
  };

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
            Segunda ?? Sexta <time>11:30</time> ??s <time>15:30</time>
          </span>
          <span>
            S??bados <time>11:30</time> ??s <time>22:00</time>
          </span>
          <span>
            Domingo e Feriados <time>11:30</time> ??s <time>15:00</time>
          </span>
        </div>
      </div>
      <Input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div className="restaurant-food">
        {Object.entries(menu).map(([key, foods]) => (
          <Accordion
            key={key}
            title={key}
            content={foods}
            openModal={openModal}
            search={search}
          />
        ))}
      </div>
      <ModalCard ref={modalRef}>
        <ModalContent modalInfo={modalInfo} handleCloseModal={closeModal} />
      </ModalCard>
    </div>
  );
};

export default RestaurantPage;
