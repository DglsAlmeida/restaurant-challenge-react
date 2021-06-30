import './styles/global.scss';
import { Header } from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes />
      </Provider>
    </Router>
  )
}

export default App;