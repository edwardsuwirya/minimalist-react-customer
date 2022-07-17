import './App.css';
import CustomerService from "./services/customer/CustomerService";
import CustomerPageController from "./features/customer/customerPage/CustomerPageController";
import LoginPageView from "./features/login/loginPage/LoginPageView";
import {useState} from "react";
import LoginPageController from "./features/login/loginPage/LoginPageController";
import LoginService from "./services/customer/LoginService";
import CustomerPageView from "./features/customer/customerPage/CustomerPageView";

const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(false)
    return (
        <>
            {isAuthenticated === false ?
                <LoginPageView controller={() => LoginPageController(LoginService)} setAuth={setAuthenticated}/> :
                <CustomerPageView controller={() => CustomerPageController(CustomerService)}/>
            }
        </>
    );
}


export default App;
