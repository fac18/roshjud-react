import React from "react";
// import { getUserDataGit } from '../utils/getUserDataGit';

const UserImage = props => {
  console.log("This is userData", props.userData);

  if (!props.userData) {
    return <h3 className="loading">...Loading</h3>;
  }

  const { avatar_url, name } = props.userData;
  return (
    <div>
      <h1>SuperGit</h1>
      <form>
        <fieldset>
          <legend>User</legend>
          <label for=""></label>
          <input
            placeholder="Enter user name"
            type="text"
            id=""
            name=""
            // onChange={props.handleMin}
          ></input>
        </fieldset>
        <img src={avatar_url} />
      </form>
    </div>
  );
};

export default UserImage;
