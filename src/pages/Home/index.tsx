import { Card } from "../../components/Card"
import { Input } from "../../components/Input"
import logoRestaurant from '../../assets/vegan-restaurant-logo.png';
import '../../styles/home.scss'

const Home = () => {
  return (
    <div className="home">
      <span className="home-title">Bem vindo ao lista Rango</span>
      <Input />
      <div className="home-restaurants">
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
        <Card 
          name="Nome do Restaurante"
          img={logoRestaurant}
        />
      </div>
    </div>
  )
}

export default Home;