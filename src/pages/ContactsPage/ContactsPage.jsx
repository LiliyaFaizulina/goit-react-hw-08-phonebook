import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Section } from 'components/Section/Section';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { SearchFilter } from 'components/SearchFilter/SearchFilter';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Wrapper } from 'components/Common.styled';

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
          <div>
            <SearchFilter />
            <ContactList />
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default ContactsPage;
