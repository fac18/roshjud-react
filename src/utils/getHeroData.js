const checkResponse = response => {
    if (response.status != 200) {
        console.log(`Error with the request! ${response.status}`);
        return;
    }
    return response.json();
}

export const getHeroData = url => {
    return (
        fetch(`${url}`)
        .then(checkResponse)
        .catch(err => {
            throw new Error(`Fetch getHeroData failed ${err}`);
        })
    );
};