import React from "react";
// import { getUserDataGit } from '../utils/getUserDataGit';

const UserImage = props => {
  console.log("This is userData", props.userData);

  if (!props.userData) {
    return <h3 className="loading">...Loading</h3>;
  }

  const { avatar_url, name } = props.userData;

  // const [userData, setUserImage] = React.useState(null);

  // React.useEffect(() => {
  //     const url = `https://api.github.com/users/roshlarosh`;
  //     getUserDataGit(url).then(data => setUserImage(data));
  // }, []);

  // console.log('This is userImage', userData);
  return (
    <div>
      <section>
        <img src={avatar_url} />
      </section>
    </div>
  );
};

export default UserImage;
