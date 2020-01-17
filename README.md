# We Are Super Team RoshJud!

![](https://media2.giphy.com/media/26BRv0ThflsHCqDrG/giphy.webp?cid=790b76118053313e9ac6ae59f09b3776caa32c9d50b9f5c2&rid=giphy.webp)

---

# gitMission Impossible?

- We deployed our app on netlify. To play our game, please click on this [link](https://roshjud-react.netlify.com/)

![](https://media0.giphy.com/media/TwHb0h15HoZkA/giphy.gif?cid=790b7611c5b4ea3e00a524836e9ca2281caf1588557fd069&rid=giphy.gif)

---

## Goals


### The goal was to build an interactive game using data from an API

---

## User Stories

- As a user I would like to be able to input my gitHub handle and see my avatar displayed on the app.

- As a user I would like to be able to be matched with a super-hero buddy.

- As a user I would like to be able to be assigned a mission to complete in collaboration with my super buddy.

- As a user I would like to be able to predict whether or not we will be able to complete the mission.

- As a user I would like to be able to keep score of my successful predictions.

---

## Wire Frame

![](https://i.imgur.com/nShTuCN.jpg)

---

## File Architecture

![](https://i.imgur.com/ZNQX566.jpg?1)

---

## It's not JavaScript!

```Javascript
const UserImage = () => {
  const [userData, setUserData] = React.useState(null);
  console.log("This is userData", userData);

  const [gitHandle, setGitHandle] = React.useState();

  return (
    <div>
      <h1>SuperGit</h1>
      <form
        onSubmit={event => {
          event.preventDefault();
          const url = `https://api.github.com/users/${gitHandle}`;
          getUserDataGit(url).then(data => setUserData(data));
        }}
      >
        <fieldset>
          <legend>User</legend>
          <label for="gitHandle"></label>
          <input
            placeholder="Enter user name"
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
```
---

