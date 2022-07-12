import './App.css';
import {useState} from "react";

const list = [
    {
        id: 'C001',
        firstName: 'Fadley',
        lastName: 'Mustopa',
        address: 'Ragunan',
    },
    {
        id: 'C002',
        firstName: 'Jono',
        lastName: 'Nurkosim',
        address: 'Mampang',
    },
];

const App = () => {
    const [customerList, setCustomerList] = useState(list)
    return (
        <>
            <CustomerForm setList={setCustomerList}/>
            <CustomerList list={customerList}/>
        </>
    );
}
const CustomerForm = (props) => {
    const [id, setId] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address, setAddress] = useState();
    const onAddCustomer = () => {
        props.setList(list => [...list, {
            id: id, firstName: firstName, lastName: lastName, address: address
        }]);
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
const CustomerList = ({list}) => (
    <ul>
        {list.map(item => (
            <CustomerListItem key={item.id} item={item}/>
        ))}
    </ul>
);

const CustomerListItem = ({item}) => (
    <li>
        <div>{item.id}</div>
        <div>{item.firstName} {item.lastName}</div>
        <div>{item.address}</div>
    </li>
);
export default App;
