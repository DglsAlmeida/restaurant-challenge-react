import './styles/global.scss';
import { Header } from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  )
}

export default App;