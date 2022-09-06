import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/authUser/aurhUser';
import operations from 'redux/authUser/authUserApi';

const Menu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const email = useSelector(authSelectors.getUserEmail);

    return (
        <div>
            <p>Welcom: {name} </p>
            <p>{email}</p>
            <button 
            type='button'
            onClick={() => dispatch(operations.logOut())}>
            </button>
        </div>
    )

}

export default Menu