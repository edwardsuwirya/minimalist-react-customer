import './App.css';
import CustomerPageView from "./features/customer/customerPage/CustomerPageView";
import CustomerService from "./services/customer/CustomerService";
import CustomerPageController from "./features/customer/customerPage/CustomerPageController";

const App = () => {
    return (
        <>
            <CustomerPageView controller={() => CustomerPageController(CustomerService)}/>
        </>
    );
}


export default App;
