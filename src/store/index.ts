import { createStore } from 'redux';
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface IState {
  cart: ICartState;
}

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;