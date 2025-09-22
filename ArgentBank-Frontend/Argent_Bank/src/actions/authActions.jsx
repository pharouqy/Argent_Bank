import Cookies from "js-cookie";

export default function login(email, password, remerberMe) {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.status === 200) {
        const token = await data.body.token;
        localStorage.setItem("token", token);
        remerberMe
          ? Cookies.set("token", token, {
              expires: 7, // durée de vie (7 jours)
              secure: true, // uniquement via HTTPS
              sameSite: "Strict", // empêche l'envoi cross-site (CSRF)
              path: "/", // accessible partout dans ton domaine
            })
          : Cookies.remove("token");

        dispatch({
          type: "LOGIN_SUCCESS",
          payload: token || Cookies.get("token"),
        });
      }
      if (data.status === 400) {
        localStorage.removeItem("token");
        dispatch({ type: "LOGIN_FAILURE", payload: data.message });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.message });
    }
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };
}
