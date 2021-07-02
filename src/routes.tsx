import { Switch, Route } from 'react-router-dom'
import { Cart } from './pages/Cart'
import Home from './pages/Home'
import RestaurantPage from './pages/RestaurantPage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={RestaurantPage} />
      <Route path="/restaurant/cart" component={Cart} />
    </Switch>
  )
}

export default Routes;