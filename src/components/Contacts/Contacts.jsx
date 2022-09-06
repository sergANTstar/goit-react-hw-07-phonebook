import css from '../Contacts/Contacts.module.css';
import PropTypes from 'prop-types';
import { useGetContactsQuery, useDeleteContactsMutation, } from 'redux/contsctsApi';


const Contacts = ({filter}) => {
    const {
        data: contacts,
        isUninitialized,
        isFetching,
        isError,
      } = useGetContactsQuery();
    
      const filterContacts = () =>{
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
      }
    
      const [deleteContact, { isLoading: isDeleting }] =
        useDeleteContactsMutation();
    
      const showContacts = contacts && !isFetching && !isError;
    
  
   return   (
                <ul className={css.contacts__list}>
                    { showContacts && filterContacts().map(({id, name, phone}) => {
                        return(
                            <li className={css.contacts__items} key={id}>
                                <p>
                                    {name}: {phone}
                                </p>
                                <button
                                    className={css.contact__button}
                                    type="button" 
                                    onClick={() => deleteContact(id)}
                                    disabled={isUninitialized}>
                                    {isDeleting ? 'deleting...' : 'Delete'}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            );
        
};

export default Contacts

Contacts.propTypes = {
    filter: PropTypes.string.isRequired,
  };