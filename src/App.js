import './App.css';
import CustomerService from "./services/customer/CustomerService";
import useCustomerPageController from "./features/customer/customerPage/useCustomerPageController";
import LoginPageView from "./features/login/loginPage/LoginPageView";
import {useState} from "react";
import useLoginPageController from "./features/login/loginPage/useLoginPageController";
import LoginService from "./services/customer/LoginService";
import CustomerPageView from "./features/customer/customerPage/CustomerPageView";

const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(false)
    return (
        <>
            {
                isAuthenticated === false ?
                    <LoginPageView controller={useLoginPageController} service={LoginService}
                                   setAuth={setAuthenticated}/> :
                    <CustomerPageView controller={useCustomerPageController} service={CustomerService}/>
            }
        </>
    );
}


export default App;
