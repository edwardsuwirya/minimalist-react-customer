import PropTypes from "prop-types";

const LoginPageView = ({controller, service}) => {
    const {
        userName, setUserName,
        password, setPassword,
        onLogin
    } = controller(service);
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
            <button onClick={() => onLogin()}>
                Login
            </button>
        </>
    )
}
LoginPageView.propTypes = {
    controller: PropTypes.func.isRequired
}
export default LoginPageView;
