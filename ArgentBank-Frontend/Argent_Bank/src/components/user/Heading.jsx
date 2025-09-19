import { useState } from "react";

function Heading({ title, username }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="heading">
      <h1>{title} <br /> {username}</h1>
      {isEditing ? (
        <div>
          <label htmlFor="heading">Edit username : </label>
          <input
            type="text"
            name="heading"
            id="heading"
            value=""
            onChange={() => () => {}}
            onBlur={() => setIsEditing(false)}
            autoFocus
          />
        </div>
      ) : (
        <>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        </>
      )}
    </div>
  );
}

export default Heading;
