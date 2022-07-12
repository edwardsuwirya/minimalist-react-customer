import './App.css';
import CustomerPage from "./features/customer/customerPage/CustomerPage";
import CustomerService from "./services/customer/CustomerService";
import CustomerPageController from "./features/customer/customerPage/CustomerPageController";

const App = () => {
    return (
        <>
            <CustomerPage controller={() => CustomerPageController(CustomerService)}/>
        </>
    );
}


export default App;
