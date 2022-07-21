const LoginService = () => {
    const Auth = (userCred) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userCred.userName === 'enigma' && userCred.password === '111') {
                    resolve('C001')
                } else {
                    reject('Unauthorized')
                }
            }, 3000)
        })
    }

    return {
        Auth
    }
}

export default LoginService
