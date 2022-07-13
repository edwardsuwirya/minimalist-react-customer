const LoginPage = ({controller, setAuth}) => {
    const {
        userName, setUserName,
        password, setPassword,
        onLogin
    } = controller();
    return (
        <>
            <label>User Name</label>
            <br/>
            <input
                name='userName'
                type='text'
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            <br/>
            <label>Password</label>
            <br/>
            <input
                name='password'
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <br/>
            <button onClick={() => onLogin(setAuth)}>
                Login
            </button>
        </>
    )
}

export default LoginPage;
