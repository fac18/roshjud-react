# From git to Mission Impossible?

![](https://media0.giphy.com/media/TwHb0h15HoZkA/giphy.gif?cid=790b7611c5b4ea3e00a524836e9ca2281caf1588557fd069&rid=giphy.gif)

---

## Goals


### The goal was to build an interactive game using data from an API

---

## User Stories

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

