const LoginService = () => {
    const Auth = (userCred) => {
        return new Promise((resolve, reject) => {
            if (userCred.userName === 'enigma' && userCred.password === '111') {
                resolve('Success')
            } else {
                reject('Unauthorized')
            }

        })
    }


    return {
        Auth
    }
}

export default LoginService
