import Customer from "../../../model/Customer";
import {useState} from "react";

const CustomerFormController = () => {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');

    const onClearForm = () => {
        setId('');
        setFirstName('');
        setLastName('');
        setAddress('');
    }
    const onAddCustomer = (setList) => {
        setList(Customer(id, firstName, lastName, address));
        onClearForm();
    }

    return {
        id, setId,
        firstName, setFirstName,
        lastName, setLastName,
        address, setAddress,
        onAddCustomer
    }
}
export default CustomerFormController;
