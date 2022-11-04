import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Form } from 'components/Common.styled';
import { Heading } from 'components/Common.styled';

const nameCheckMessage =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const telCheckMessage =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newName = name.toLowerCase();

    if (contacts.some(contact => contact.name.toLowerCase() === newName)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <div>
      <Heading>Add new contact</Heading>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          onChange={handleInput}
          size="small"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title={nameCheckMessage}
          required
        />

        <TextField
          label="Phone"
          onChange={handleInput}
          size="small"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title={telCheckMessage}
          required
        />

        <Button type="submit" variant="contained" size="small">
          Add contact
        </Button>
      </Form>
    </div>
  );
};
