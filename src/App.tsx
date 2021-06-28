import './styles/global.scss';
import { Header } from './components/Header';
import RestaurantPage from './pages/RestaurantPage';

const App = () => {
  return (
    <>
      <Header />
      <RestaurantPage />
    </>
  )
}

export default App;