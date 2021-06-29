import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantPage from './pages/RestaurantPage'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={RestaurantPage} />
    </Switch>
  )
}

export default Routes;