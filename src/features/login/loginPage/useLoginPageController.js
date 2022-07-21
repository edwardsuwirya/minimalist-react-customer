import {useState} from "react";
import UserCred from "../../../model/UserCred";
import {useDispatch} from "react-redux";
import {userLogin} from "../LoginAction";

const useLoginPageController = (service) => {
    const {Auth} = service();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onLogin = async () => {
        try {
            const resp = await Auth(UserCred(userName, password));
            if (resp) {
                dispatch(userLogin(resp))
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

export default useLoginPageController;
