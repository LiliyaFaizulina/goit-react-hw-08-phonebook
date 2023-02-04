import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contactsSlice';
import { Heading, StyledTextField } from 'components/Common.styled';

export const SearchFilter = () => {
  const dispatch = useDispatch();
  const handleInput = e => {
    const { value } = e.target;
    dispatch(changeFilter(value.toLowerCase()));
  };
  return (
    <>
      <Heading>Contacts</Heading>
      <StyledTextField
        size="small"
        sx={{ marginBottom: '10px', width: '100%' }}
        label="Find contacts by name"
        type="text"
        onChange={handleInput}
      />
    </>
  );
};
