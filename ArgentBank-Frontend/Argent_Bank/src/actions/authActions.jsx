export default function login(email, password) {
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
        const token = data.body.token;
        localStorage.setItem("token", token);
        dispatch({ type: "LOGIN_SUCCESS", payload: { token } });
      }
      if (data.status === 400) {
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
