import React from "react";
import { getUserDataGit } from "../utils/getUserDataGit";

const UserImage = () => {
  const [userData, setUserData] = React.useState(null);
  console.log("This is userData", userData);

  const [gitHandle, setGitHandle] = React.useState();

  return (
    <div>
      <h1>gitMission Impossible?</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          const url = `https://api.github.com/users/${gitHandle}`;
          getUserDataGit(url).then(data => setUserData(data));
        }}
      >
        <fieldset>
          <legend>Your git id</legend>
          <label for="gitHandle"></label>
          <input
            placeholder="Enter your git handle"
            type="text"
            id="gitHandle"
            name="gitHandle"
            value={gitHandle}
            onChange={event => setGitHandle(event.target.value)}
          ></input>
          <input type="submit" value="submit"></input>
        </fieldset>
        {userData ? <img src={userData.avatar_url} /> : null}
      </form>
    </div>
  );
};

export default UserImage;
