import { useState } from "react";
import { updateUserProfile } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function Heading({ title, username }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(username);
  const dispatch = useDispatch();
  const userProfile = useSelector(
    (state) => state.user?.userProfile?.body?.userName
  );

  const handleSave = () => {
    dispatch(updateUserProfile({ userName: newUsername }));
    setIsEditing(false);
  };

  return (
    <div className="heading">
      <h1>
        {title} <br /> {userProfile}
      </h1>
      {isEditing ? (
        <div>
          <label htmlFor="heading">Edit username: </label>
          <input
            type="text"
            name="heading"
            id="heading"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            autoFocus
          />
          <div>
            <button onClick={handleSave} className="edit-button">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="edit-button">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Edit Name
        </button>
      )}
    </div>
  );
}

export default Heading;
