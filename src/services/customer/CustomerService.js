import Customer from "../../model/Customer";

const CustomerService = () => {
    let list = [
        Customer('C001', 'Fadley', 'Mustopa', 'Ragunan'),
        Customer('C002', 'Jono', 'Nurkosim', 'Mampang'),
    ];
    const GetAll = () => {
        return new Promise((resolve, reject) => {
            resolve(list)
        })
    }

    const Insert = (customer) => {
        return new Promise((resolve, reject) => {
            list = [...list, customer]
            resolve(true)
        })
    }


    return {
        GetAll, Insert
    }
}

export default CustomerService
