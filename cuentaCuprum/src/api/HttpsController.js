const isValidUser = (userID) => {
    return fetch('https://hackathon-mobile.firebaseio.com/users/'+userID+'.json')
     .then((response) => response.json())
     .then((responseJSON) => {
        console.log(responseJSON);
     })
     .catch((error) => {
        console.error(error)
     });
}

export default isValidUser;



