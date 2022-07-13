import './App.css';
import CustomerPage from "./features/customer/customerPage/CustomerPage";
import CustomerService from "./services/customer/CustomerService";
import CustomerPageController from "./features/customer/customerPage/CustomerPageController";
import LoginPage from "./features/login/loginPage/LoginPage";
import LoginPageController from "./features/login/loginPage/LoginPageController";
import LoginService from "./services/customer/LoginService";
import {useSelector} from "react-redux";
import {userIdSelector} from "./features/login/LoginSelector";

const App = () => {
    const userId = useSelector(userIdSelector)
    return (
        <>
            {userId === "" ?
                <LoginPage controller={() => LoginPageController(LoginService)}/> :
                <CustomerPage controller={() => CustomerPageController(CustomerService)}/>
            }
        </>
    );
}


export default App;
