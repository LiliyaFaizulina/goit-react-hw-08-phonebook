import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';
import { StyledForm } from './UpdateContactForm.styled';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export const UpdateContactForm = ({ contact, closeForm }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useDispatch();

  const handleInput = ({ target: { value, name } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateContact({ ...contact, name, number }));
    closeForm();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        label="Name"
        size="small"
        type="text"
        name="name"
        value={name}
        onChange={handleInput}
      />
      <TextField
        label="Phone"
        size="small"
        type="text"
        name="number"
        value={number}
        onChange={handleInput}
      />
      <Button variant="outlined" size="small" type="submit">
        Save
      </Button>
    </StyledForm>
  );
};
