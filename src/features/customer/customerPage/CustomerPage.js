import CustomerForm from "../customerForm/CustomerForm";
import CustomerList from "../customerList/CustomerList";
import {useEffect} from "react";
import CustomerFormController from "../customerForm/CustomerFormController";

const CustomerPage = ({controller}) => {
    const {customerList, onCreateCustomer, onGetCustomerList, onLogout} = controller();

    useEffect(() => {
        onGetCustomerList();
    }, [])

    return (
        <>
            <CustomerForm setList={onCreateCustomer} controller={CustomerFormController}/>
            <CustomerList list={customerList}/>
            <button onClick={onLogout}>Logout</button>
        </>
    );
}

export default CustomerPage;
