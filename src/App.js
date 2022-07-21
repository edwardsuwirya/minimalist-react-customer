import './App.css';
import CustomerPageView from "./features/customer/customerPage/CustomerPageView";
import CustomerService from "./services/customer/CustomerService";
import useCustomerPageController from "./features/customer/customerPage/useCustomerPageController";

const App = () => {
    return (
        <>
            <CustomerPageView controller={() => useCustomerPageController(CustomerService)}/>
        </>
    );
}


export default App;
