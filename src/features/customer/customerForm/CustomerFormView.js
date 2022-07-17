import PropTypes from "prop-types";

const CustomerFormView = ({setList, controller}) => {
    const {
        id, setId,
        firstName, setFirstName,
        lastName, setLastName,
        address, setAddress, onAddCustomer
    } = controller();
    return (
        <>
            <h3>Customer Form</h3>
            <label>Id</label>
            <br/>
            <input
                name='id'
                type='text'
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <br/>
            <label>First Name</label>
            <br/>
            <input
                name='firstname'
                type='text'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <br/>
            <label>Last sName</label>
            <br/>
            <input
                name='lastname'
                type='text'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <br/>
            <label>Address</label>
            <br/>
            <input
                name='address'
                type='text'
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            <br/>
            <button onClick={() => onAddCustomer(setList)}>
                Add
            </button>
        </>
    )
}
CustomerFormView.propTypes = {
    setList: PropTypes.func.isRequired,
    controller: PropTypes.func.isRequired
}
export default CustomerFormView;
