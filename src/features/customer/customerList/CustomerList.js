import CustomerListItem from "./CustomerListItem";
import PropTypes from "prop-types";

const CustomerList = ({list}) => (
    <ul>
        {list.map(customer => (
            <CustomerListItem key={customer.id} customer={customer}/>
        ))}
    </ul>
);
CustomerList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object)
}
export default CustomerList;
