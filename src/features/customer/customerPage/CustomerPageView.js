import CustomerFormView from "../customerForm/CustomerFormView";
import CustomerList from "../customerList/CustomerList";
import useCustomerFormController from "../customerForm/useCustomerFormController";
import PropTypes from "prop-types";

const CustomerPageView = ({controller, service}) => {
    const {customerList, onCreateCustomer} = controller(service);

    return (
        <>
            <CustomerFormView setList={onCreateCustomer} controller={useCustomerFormController}/>
            <CustomerList list={customerList}/>
        </>
    );
}
CustomerPageView.propTypes = {
    controller: PropTypes.func.isRequired
}
export default CustomerPageView;
