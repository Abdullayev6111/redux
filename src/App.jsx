import ModalEl from './components/ModalEl';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './components/LoginPage';
import Profile from './components/Profile';
import '@mantine/core/styles.css';

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Product />} />
        <Route path="/todos" element={<ModalEl />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
