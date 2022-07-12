const CustomerListItem = ({customer}) => (
    <li>
        <div>{customer.id}</div>
        <div>{customer.firstName} {customer.lastName}</div>
        <div>{customer.address}</div>
    </li>
);
export default CustomerListItem;
