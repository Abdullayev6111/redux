import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import todoReducer from './todoSlice';

const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
const savedProducts = JSON.parse(localStorage.getItem('products')) || [];

export const store = configureStore({
  reducer: {
    products: productReducer,
    todos: todoReducer,
  },
  preloadedState: {
    todos: { todos: savedTodos },
    products: { products: savedProducts },
  },
});
