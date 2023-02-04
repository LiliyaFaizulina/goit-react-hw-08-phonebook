import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { UpdateContactForm } from 'components/UpdateContactForm/UpdateContactForm';
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import {
  ButtonsWrapper,
  Contact,
  ContactLink,
  Wrapper,
} from './ContactList.styled';
import { IconButton } from '@mui/material';

export const ContactList = () => {
  const [contactToUpdate, setContactToUpdate] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onDeleteBtnClick = (contactId, name) => {
    dispatch(deleteContact({ _id: contactId, name }));
  };

  const showUpdateForm = contactId => {
    const contact = contacts.find(({ _id }) => _id === contactId);
    setContactToUpdate(contact);
  };

  const closeUpdateForm = () => {
    setContactToUpdate(null);
  };

  return !visibleContacts.length ? (
    <p>Matches not found</p>
  ) : (
    <ul>
      {visibleContacts.map(({ name, phone, email, _id }) => (
        <Contact key={_id}>
          <Wrapper>
            <Avatar
              sx={{ bgcolor: '#1976d2', width: 30, height: 30, fontSize: 14 }}
            >
              {name.split(' ')[0][0] +
                (name.split(' ')[1] ? name.split(' ')[1][0] : '')}
            </Avatar>

            <p>{name}</p>
            <ButtonsWrapper>
              <IconButton
                size="small"
                aria-label="update"
                color="primary"
                type="button"
                onClick={() => {
                  showUpdateForm(_id);
                }}
              >
                <PublishedWithChangesOutlinedIcon />
              </IconButton>
              <IconButton
                size="small"
                aria-label="delete"
                color="primary"
                disabled={isLoading}
                type="button"
                onClick={() => {
                  onDeleteBtnClick(_id, name);
                }}
              >
                <DeleteForeverOutlinedIcon />
              </IconButton>
            </ButtonsWrapper>
          </Wrapper>
          <ContactLink href={`tel:${phone}`}>
            <ContactPhoneOutlinedIcon
              aria-label="contact-phone"
              color="primary"
            />{' '}
            {phone}
          </ContactLink>
          <ContactLink href={`mailto:${email}`}>
            <ContactMailOutlinedIcon
              aria-label="contact-email"
              color="primary"
            />{' '}
            {email}
          </ContactLink>

          {contactToUpdate && contactToUpdate._id === _id && (
            <UpdateContactForm
              contact={contactToUpdate}
              closeForm={closeUpdateForm}
            />
          )}
        </Contact>
      ))}
    </ul>
  );
};
