import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import todoReducer from './todoSlice';
import authReducer from './authSlice';

const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
const savedUser = localStorage.getItem('user');
const preloadedState = savedUser ? { auth: { user: JSON.parse(savedUser), isAuth: true } } : {};

export const store = configureStore({
  reducer: {
    products: productReducer,
    todos: todoReducer,
    auth: authReducer,
  },
  preloadedState: {
    todos: { todos: savedTodos },
    products: { products: savedProducts },
    auth: preloadedState.auth || { user: null, isAuth: false },
  },
});
