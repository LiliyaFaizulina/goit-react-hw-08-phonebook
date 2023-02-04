import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Section } from 'components/Section/Section';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Box, Wrapper } from 'components/Common.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Wrapper>
          <AddContactForm />
          <Box>
            <SearchFilter />
            <ContactList />
          </Box>
        </Wrapper>
      </Section>
    </>
  );
};

export default ContactsPage;
