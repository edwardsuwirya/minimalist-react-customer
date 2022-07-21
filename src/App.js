import './App.css';
import CustomerService from "./services/customer/CustomerService";
import useCustomerPageController from "./features/customer/customerPage/useCustomerPageController";
import LoginPageView from "./features/login/loginPage/LoginPageView";
import {useState} from "react";
import useLoginPageController from "./features/login/loginPage/useLoginPageController";
import LoginService from "./services/customer/LoginService";
import {useSelector} from "react-redux";
import {userIdSelector} from "./features/login/LoginSelector";
import LoginPageView from "./features/login/loginPage/LoginPageView";
import CustomerPageView from "./features/customer/customerPage/CustomerPageView";

const App = () => {
    const userId = useSelector(userIdSelector)
    return (
        <>
            {userId === ""  ?
                <LoginPageView controller={() => LoginPageController(LoginService)} /> :
                <CustomerPageView controller={() => CustomerPageController(CustomerService)}/>
            }
        </>
    );
}


export default App;
