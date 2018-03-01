async function getUser(rutUser) {
        return fetch('https://hackathon-mobile.firebaseio.com/users/'+rutUser+'.json')
        .then(response => response.json())
        .then(responseJson => { 
            responseJson 
        })
        .catch((error) => {
           console.error(error)
        });
}

const isValidUser = (rutUser, passUser) => {
    const userJson = await getUser(rutUser)

    if (userJson){
        console.log(userJson)
        if (passUser === userJson.password){
            return true
        }
    }

    return false
}

export default isValidUser;

