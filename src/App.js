import './App.css';
import CustomerPage from "./features/customer/customerPage/CustomerPage";
import CustomerService from "./services/customer/CustomerService";
import CustomerPageController from "./features/customer/customerPage/CustomerPageController";
import LoginPage from "./features/login/loginPage/LoginPage";
import {useState} from "react";
import LoginPageController from "./features/login/loginPage/LoginPageController";
import LoginService from "./services/customer/LoginService";

const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(false)
    return (
        <>
            {isAuthenticated === false ?
                <LoginPage controller={() => LoginPageController(LoginService)} setAuth={setAuthenticated}/> :
                <CustomerPage controller={() => CustomerPageController(CustomerService)}/>
            }
        </>
    );
}


export default App;
