import {useEffect,useState} from "react";
import {useDispatch} from "react-redux";
import {userLogout} from "../../login/LoginAction";

const useCustomerPageController = (service) => {
    const {GetAll, Insert} = service();
    const [customerList, setCustomerList] = useState([])
    const dispatch = useDispatch();

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
    const onLogout = () => {
        dispatch(userLogout())
    }

    return {
        customerList,
        onCreateCustomer,
        onGetCustomerList,
        onLogout
    }
}

export default useCustomerPageController;
