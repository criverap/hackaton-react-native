const isValidUser = (userID) => {
    if (userID){
        return fetch('https://hackathon-mobile.firebaseio.com/users/'+userID+'.json')
        .then(response => response.json())
        .then(responseJson => responseJson)
        .catch((error) => {
           console.error(error)
        });
    }
}

export default isValidUser;