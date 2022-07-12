import {useState} from "react";
import Customer from "../../../model/Customer";

const CustomerForm = (props) => {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const onAddCustomer = () => {
        props.setList(Customer(id, firstName, lastName, address));
        onClearForm();

    }
    const onClearForm = () => {
        setId('');
        setFirstName('');
        setLastName('');
        setAddress('');
    }
    return (
        <>
            <h3>Customer Form</h3>
            <label>Id</label>
            <br/>
            <input
                name='id'
                type='text'
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <br/>
            <label>First Name</label>
            <br/>
            <input
                name='firstname'
                type='text'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <br/>
            <label>Last sName</label>
            <br/>
            <input
                name='lastname'
                type='text'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <br/>
            <label>Address</label>
            <br/>
            <input
                name='address'
                type='text'
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            <br/>
            <button onClick={onAddCustomer}>
                Add
            </button>
        </>
    )
}

export default CustomerForm;
