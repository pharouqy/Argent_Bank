function fetchUserProfile() {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch({ type: "FETCH_PROFILE_FAILURE", payload: "No token found" });
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        alert("Failed to fetch user profile");
        throw new Error("Failed to fetch user profile");
      }

      const data = await response.json();
      dispatch({ type: "FETCH_PROFILE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_PROFILE_FAILURE", payload: error.message });
    }
  };
}

function updateUserProfile({ userName }) {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch({ type: "FETCH_PROFILE_FAILURE", payload: "No token found" });
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName,
          }),
        }
      );

      if (!response.ok) {
        alert("Failed to update user profile");
        throw new Error("Failed to update user profile");
      }

      const data = await response.json();
      dispatch({ type: "UPDATE_PROFILE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "UPDATE_PROFILE_FAILURE", payload: error.message });
    }
  };
}

export { fetchUserProfile, updateUserProfile };
