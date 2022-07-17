import CustomerFormView from "../customerForm/CustomerFormView";
import CustomerList from "../customerList/CustomerList";
import CustomerFormController from "../customerForm/CustomerFormController";
import PropTypes from "prop-types";

const CustomerPageView = ({controller}) => {
    const {customerList, onCreateCustomer, onLogout} = controller();

    return (
        <>
            <CustomerFormView setList={onCreateCustomer} controller={CustomerFormController}/>
            <CustomerList list={customerList}/>
            <button onClick={onLogout}>Logout</button>
        </>
    );
}
CustomerPageView.propTypes = {
    controller: PropTypes.func.isRequired
}
export default CustomerPageView;
