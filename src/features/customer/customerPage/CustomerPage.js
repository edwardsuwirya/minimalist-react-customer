import CustomerForm from "../customerForm/CustomerForm";
import CustomerList from "../customerList/CustomerList";
import {useEffect, useState} from "react";

const CustomerPage = ({service}) => {
    const {GetAll, Insert} = service();
    const [customerList, setCustomerList] = useState([])

    const fetchData = async () => {
        const data = await GetAll();
        setCustomerList(data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const onCreateCustomer = async (newCustomer) => {
        const resp = await Insert(newCustomer)
        if (resp) {
            fetchData();
        }
    }
    return (
        <>
            <CustomerForm setList={onCreateCustomer}/>
            <CustomerList list={customerList}/>
        </>
    );
}

export default CustomerPage;
