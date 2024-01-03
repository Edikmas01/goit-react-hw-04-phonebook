import {  useState } from 'react';
import './Phonebook.css';



export const Phonebook = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNmber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value)
    } else if (name === 'number') {
      setNmber(value)
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);

    setName('');
    setNmber('');
  };

  return (
    <form className="phonebook-form" onSubmit={handleSubmit}>
      <h3 className="input-title">Name</h3>
      <input
        value={name}
        onChange={handleChange}
        className="phonebook-input"
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <h3 className="input-title">Number</h3>
      <input
        onChange={handleChange}
        value={number}
        className="phonebook-input"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className="phonebook-button">
        Add contact
      </button>
    </form>
  );
};
