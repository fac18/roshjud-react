import { token } from "../accessToken";

const checkResponse = response => {
  if (response.status != 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

export const getUserDataGit = url => {
  return fetch(`${url}?access_token=${token}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`Fetch getUserDataGit failed ${err}`);
    });
};
