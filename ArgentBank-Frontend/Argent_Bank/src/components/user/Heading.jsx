import { useState } from "react";
import { updateUserProfile } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function Heading({ title, username }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user?.userProfile?.body);

  const handleSave = () => {
    if (newUsername.trim() === "") {
      setError("Username ne peut pas etre vide");
      return;
    }
    setError("");
    dispatch(updateUserProfile({ userName: newUsername }));
    setIsEditing(false);
  };

  return (
    <div className="heading">
      <h1>
        {title} <br /> {userProfile?.userName}
      </h1>
      {isEditing ? (
        <>
          <div>
            <div className="edit-form">
              <label htmlFor="heading">Edit username: </label>
              <input
                className="edit-input"
                type="text"
                name="heading"
                id="heading"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                autoFocus
                required
              />
            </div>
            <div className="edit-form">
              <label htmlFor="firstName">First name: </label>
              <input
                className="edit-input"
                type="text"
                name="firstName"
                id="firstName"
                value={userProfile?.firstName}
                onChange={() => {}}
                autoFocus
                disabled
              />
            </div>
            <div className="edit-form">
              <label htmlFor="lastName">Last name: </label>
              <input
                className="edit-input"
                type="text"
                name="lastName"
                id="lastName"
                value={userProfile?.lastName}
                onChange={() => {}}
                autoFocus
                disabled
              />
            </div>
            <div>{error && <p className="error-message">{error}</p>}</div>
            <div>
              <button onClick={handleSave} className="edit-button">
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="edit-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Edit Name
        </button>
      )}
    </div>
  );
}

export default Heading;
