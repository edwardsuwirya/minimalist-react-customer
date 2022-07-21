import {useState} from "react";
import UserCred from "../../../model/UserCred";
import {useDispatch} from "react-redux";
import {userLoginError, userLoginFinished, userLoginStarted} from "../LoginSlice";

const useLoginPageController = (service) => {
    const {Auth} = service();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onLogin = async () => {
        try {
            dispatch(userLoginStarted())
            const resp = await Auth(UserCred(userName, password));
            if (resp) {
                dispatch(userLoginFinished({userId: resp}))
            } else {
                dispatch(userLoginError({error: 'Unauthorized'}));
            }
        } catch (e) {
            console.log(e);
            dispatch(userLoginError({error: 'Unauthorized'}));
        }
    }
    return {
        userName, setUserName,
        password, setPassword,
        onLogin
    }
}

export default useLoginPageController;
