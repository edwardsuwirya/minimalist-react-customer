import {useState} from "react";
import UserCred from "../../../model/UserCred";

const LoginPageController = (service) => {
    const {Auth} = service();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = async (setAuth) => {
        try {
            const resp = await Auth(UserCred(userName, password));
            if (resp) {
                setAuth(true)
            } else {
                setAuth(false)
            }
        } catch (e) {
            console.log(e)
        }
    }
    return {
        userName, setUserName,
        password, setPassword,
        onLogin
    }
}

export default LoginPageController;
