import Input from "../components/signin/Input";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import login from "../actions/authActions";
import Coockies from "js-cookie";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const error = useSelector((state) => state.auth.error);
  const [rememberMe, setRememberMe] = useState(!!Coockies.get("token"));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, rememberMe));
  };

  useEffect(() => {
    if (isAuthenticated) {
      setEmail("");
      setPassword("");
      navigate("/profile");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <Input
                type="email"
                id="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </div>
            <div className="input-wrapper">
              <Input
                type="password"
                id="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {error && <div className="error-message">{error}</div>}
            <button
              type="submit"
              className="sign-in-button"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
export default LoginPage;
