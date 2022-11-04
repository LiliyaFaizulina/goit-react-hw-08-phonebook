import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import TextField from '@mui/material/TextField';
import { Heading } from 'components/Common.styled';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const handleInput = e => {
    const { value } = e.target;
    dispatch(changeFilter(value.toLowerCase()));
  };
  return (
    <>
      <Heading>Contacts</Heading>
      <TextField
        size="small"
        sx={{ marginBottom: '10px' }}
        label="Find contacts by name"
        type="text"
        onChange={handleInput}
      />
    </>
  );
};
