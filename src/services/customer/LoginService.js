const LoginService = () => {
    const Auth = (userCred) => {
        return new Promise((resolve, reject) => {
            if (userCred.userName === 'enigma' && userCred.password === '111') {
                resolve('C001')
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
