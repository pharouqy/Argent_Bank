import { Link } from "react-router-dom";
import argentBankLogo from "../assets/img/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/authActions";
import { useEffect } from "react";
import { fetchUserProfile } from "../actions/userActions";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const userProfile = useSelector(
    (state) => state.user?.userProfile?.body?.userName
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUserProfile());
    }
  }, [isAuthenticated, dispatch]);

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
          <>
            <div className="main-nav-item">
              <i className="fas fa-user-circle"></i> {userProfile}
            </div>
            <button className="main-nav-item" onClick={() => handleLogout()}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
