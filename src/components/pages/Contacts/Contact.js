import ContactForm from "components/ContactForm/ContactForm";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";
import { useState } from "react";

const ContactsPage = () => {
    const [filter, setFilter] = useState('');
    const filterName = e => {
        setFilter(e.target.value);
    }

    return(
        <section>
            <h1>Phonebook</h1>
            <ContactForm/>
            <h2>Contacts</h2>
            <Filter filter= {filter} onChange={filterName}/>
            <Contacts filter={filter}/>
        </section>
    )
}

export default ContactsPage