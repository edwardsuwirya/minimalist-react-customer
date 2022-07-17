import CustomerFormView from "../customerForm/CustomerFormView";
import CustomerList from "../customerList/CustomerList";
import {useEffect} from "react";
import CustomerFormController from "../customerForm/CustomerFormController";
import PropTypes from "prop-types";

const CustomerPageView = ({controller}) => {
    const {customerList, onCreateCustomer, onGetCustomerList} = controller();

    useEffect(() => {
        onGetCustomerList();
    }, [])

    return (
        <>
            <CustomerFormView setList={onCreateCustomer} controller={CustomerFormController}/>
            <CustomerList list={customerList}/>
        </>
    );
}
CustomerPageView.propTypes = {
    controller: PropTypes.func.isRequired
}
export default CustomerPageView;
