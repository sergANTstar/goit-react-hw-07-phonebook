import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilterValue } from '../../redux/contacts';



const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilterValue)

    return (<label>
                <input
                type="text"
                value={filter}
                onChange={e => dispatch(setFilter(e.target.value))}
                className={css.contact__input}
                placeholder="Find contacts by name"
                />
            </label>);
};

export default Filter