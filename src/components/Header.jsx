import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login, logout } from '../store/authSlice';

function Header() {
  const dispatch = useDispatch();

  const { isAuth, user } = useSelector((state) => state.auth);

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

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header>
      <h1>Logo</h1>
      <div style={{ display: 'flex', gap: 30 }}>
        <NavLink to="/">Products</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {isAuth ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
            <span>
              <b style={{ color: 'red', textDecoration: 'underline' }}>{user?.name}</b>
            </span>
            <button onClick={handleLogout} className="btn-login">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={handleLogin} className="btn-login">
            Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
