
import  Contacts  from 'components/Contacts/Contacts'; 
import  Filter  from 'components/Filter/Filter'; 
import  ContactForm from 'components/ContactForm/ContactForm'; 
import css from '../PhoneBoock/PhoneBoock.module.css'
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

export default function  PhoneBoock () {

  const [contacts, setContacts] = useState('');

  const filterContacts = e => {
    setContacts(e.target.value);
  };

        return (
            <div>
              <h1 className={css.phoneBoock__h} >Phonebook</h1>
              <ToastContainer/>
              <ContactForm/>
              <h2>Contacts</h2>
              <Filter filter = {contacts} onChange={filterContacts} />
             <Contacts filter= {contacts}/>
            </div>
        );
      }





   

