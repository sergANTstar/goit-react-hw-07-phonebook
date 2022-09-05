
import  Contacts  from 'components/Contacts/Contacts'; 
import  Filter  from 'components/Filter/Filter'; 
import  ContactForm from 'components/ContactForm/ContactForm'; 
import css from '../PhoneBoock/PhoneBoock.module.css'
import { ToastContainer } from 'react-toastify';

export default function  PhoneBoock () {

        return (
            <div>
              <h1 className={css.phoneBoock__h} >Phonebook</h1>
              <ToastContainer/>
              <ContactForm/>
              <h2>Contacts</h2>
              <Filter/>
             <Contacts/>
            </div>
        );
      }





   

