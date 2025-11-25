import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../store/authSlice';

function Header() {
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(
      login({
        isAuth: true,
        user: {
          id: 1,
          name: 'John Doe',
          age: 21,
          address: 'Canada',
        },
      })
    );
  };
  return (
    <header>
      <h1>Logo</h1>
      <div style={{ display: 'flex', gap: 30 }}>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <button onClick={handleLogin} className="btn-login">
          Login
        </button>
      </div>
    </header>
  );
}

export default Header;
