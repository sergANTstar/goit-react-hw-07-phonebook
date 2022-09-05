import css from '../Contacts/Contacts.module.css';
import { deleteItems } from '../../redux/contacts';
import { useDispatch} from 'react-redux';
import { useFilter } from '../../redux/contacts';


const Contacts = () => {
    const dispatch = useDispatch();
 
    const contactFilter = useFilter();
  
   return   (
                <ul className={css.contacts__list}>
                    {contactFilter.map(({id, name, number}) => {
                        return(
                            <li className={css.contacts__items} key={id}>
                                <p>
                                    {name}: {number}
                                </p>
                                <button className={css.contact__button} type="button" onClick={() => dispatch(deleteItems(id))}>
                                    Delete
                                </button>
                            </li>
                        )
                    })}
                </ul>
            );
        
};

export default Contacts