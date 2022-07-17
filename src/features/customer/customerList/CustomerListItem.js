import PropTypes from "prop-types";

const CustomerListItem = ({customer}) => (
    <li>
        <div>{customer.id}</div>
        <div>{customer.firstName} {customer.lastName}</div>
        <div>{customer.address}</div>
    </li>
);
CustomerListItem.propTypes = {
    customer: PropTypes.object
}
export default CustomerListItem;
