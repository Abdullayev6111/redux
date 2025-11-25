import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute() {
  const { isAuth, user } = useSelector((state) => state.auth);

  if (!isAuth && !user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default PrivateRoute;
