import { Link } from "react-router-dom";
import argentBankLogo from "../assets/img/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/authActions";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!isAuthenticated && (
          <Link to="/login" className="main-nav-item">
            <i className="fas fa-user-circle"></i> Sign In
          </Link>
        )}
        {isAuthenticated && (
          <button className="main-nav-item" onClick={() => handleLogout()}>
            <i className="fas fa-sign-out-alt"></i> Sign Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Header;
