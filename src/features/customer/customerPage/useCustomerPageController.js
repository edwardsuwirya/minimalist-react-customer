import {useEffect, useState} from "react";

const useCustomerPageController = (service) => {
    const {GetAll, Insert} = service();
    const [customerList, setCustomerList] = useState([])

    useEffect(() => {
        onGetCustomerList();
    }, [])

    const onGetCustomerList = async () => {
        const customerList = await GetAll();
        setCustomerList(customerList);
    }

    const onCreateCustomer = async (newCustomer) => {
        const resp = await Insert(newCustomer)
        if (resp) {
            await onGetCustomerList();
        }
    }

    return {
        customerList,
        onCreateCustomer,
    }
}

export default useCustomerPageController;
