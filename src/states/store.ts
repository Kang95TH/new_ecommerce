import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './cart_slice';

const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});

export default store;
