import React from "react";
// import "./App.css";
import UserImage from "./components/UserImage";
import { getUserDataGit } from "./utils/getUserDataGit";

export default function App() {
  const [userData, setUserImage] = React.useState(null);

  React.useEffect(() => {
    const url = `https://api.github.com/users/roshlarosh`;
    getUserDataGit(url).then(data => setUserImage(data));
  }, []);

  return (
    <div className="App">
      <UserImage userData={userData} />
    </div>
  );
}
