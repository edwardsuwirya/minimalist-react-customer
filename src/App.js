import './App.css';
import CustomerPage from "./features/customer/customerPage/CustomerPage";
import CustomerService from "./services/customer/CustomerService";

const App = () => {
    return (
        <>
            <CustomerPage service={CustomerService}/>
        </>
    );
}


export default App;
