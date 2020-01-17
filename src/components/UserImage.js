import React from "react";
import { getUserDataGit } from "../utils/getUserDataGit";

const UserImage = () => {
  const [userData, setUserData] = React.useState(null);
  console.log("This is userData", userData);

  const [gitHandle, setGitHandle] = React.useState();

  return (
    <div className="userForm">
      <div>
       <form
          className="form"
          onSubmit={event => {
            event.preventDefault();
            const url = `https://api.github.com/users/${gitHandle}`;
            getUserDataGit(url).then(data => setUserData(data));
          }}
        >
          <label for="gitUser"></label>
          <input
            className="formInput"
            placeholder="Enter user name"
            type="text"
            id="gitUser"
            name="gitUser"
            value={gitHandle}
            onChange={event => setGitHandle(event.target.value)}
          ></input>
          <input className="userInput" type="submit" value="submit"></input>
          {userData ? (
            <img
              src={userData.avatar_url}
              alt={"Github user"}
              className="userImage"
            />
          ) : null}
          </form>
      </div>
    </div>
  );
};

export default UserImage;
