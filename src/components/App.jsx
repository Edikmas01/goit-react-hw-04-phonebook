import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleSubmit = (name, number) => {
    const isNameAlreadyExists = contacts.some(contact => contact.name === name);

    if (isNameAlreadyExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => [...prevState, newContact]);
  };

  const handleChange = value => {
    setFilter(value);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(storedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter)
  );


  return (
    
    <div style={{marginLeft:'30px'}}>
      <h1 className="title">Phonebook</h1>

      <Phonebook onSubmit={handleSubmit} />
      <h1 className="title">Contacts</h1>
      <Filter onChange={handleChange} filter={filter} />
      <Contacts
        contacts={visibleContacts}
        onChange={handleChange}
        filter={filter}
        onDelete={handleDeleteContact}
      />
    </div>
  );
}
export default App;