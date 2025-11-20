import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <NavLink to="/">Products</NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </header>
  );
}

export default Header;
