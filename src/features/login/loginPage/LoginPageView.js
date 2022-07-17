import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {errorSelector, loadingSelector,} from "../LoginSelector";
const LoginPageView = ({controller}) => {
    const {
        userName, setUserName,
        password, setPassword,
        onLogin
    } = controller();
    const isLoading = useSelector(loadingSelector)
    const isError = useSelector(errorSelector)
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
            <button onClick={() => onLogin()} disabled={isLoading}>
                Login
            </button>
            {isError !== '' ? <p>{isError}</p> : <></>}
        </>
    )
}
LoginPageView.propTypes = {
    controller: PropTypes.func.isRequired
}
export default LoginPageView;
