import CustomerListItem from "./CustomerListItem";

const CustomerList = ({list}) => (
    <ul>
        {list.map(customer => (
            <CustomerListItem key={customer.id} customer={customer}/>
        ))}
    </ul>
);

export default CustomerList;
