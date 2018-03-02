export default class HTTPS {
    getUser(rutUser) {
        return fetch('https://hackathon-mobile.firebaseio.com/users/'+rutUser+'.json')
        .then(response => response.json())
        .then(responseJson => responseJson )
        .catch((error) => {
            console.error(error)
        });
    }

    async isValidUser(rutUser, passUser){
        const userJson = await this.getUser(rutUser)
        
        if (await userJson){
            if (passUser === userJson.password){
                return true
            }
        }
        return false
    }
}





