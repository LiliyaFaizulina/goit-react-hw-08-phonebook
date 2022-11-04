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
import { Contact } from './ContactList.styled';
import { IconButton } from '@mui/material';


export const ContactList = () => {
  const [contactToUpdate, setContactToUpdate] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const visualContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onDeleteBtnClick = contactId => {
    dispatch(deleteContact(contactId));
  };

  const showUpdateForm = contactId => {
    const contact = contacts.find(({ id }) => id === contactId);
    setContactToUpdate(contact);
  };

  const closeUpdateForm = () => {
    setContactToUpdate(null);
  };

  return (
      <ul>
        {visualContacts.map(({ name, number, id }) => (
          <Contact key={id}>
            {/* <img src={icon} alt="Icon" width="24" height="24" /> */}
            <Avatar
              sx={{ bgcolor: '#1976d2', width: 30, height: 30, fontSize: 14 }}
            >
              {name.split(' ')[0][0] +
                (name.split(' ')[1] ? name.split(' ')[1][0] : '')}
            </Avatar>

            <p>
              {name}: {number}
            </p>
            <IconButton
              size="small"
              aria-label="update"
              color="primary"
              type="button"
              onClick={() => {
                showUpdateForm(id);
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
                onDeleteBtnClick(id);
              }}
            >
              <DeleteForeverOutlinedIcon />
            </IconButton>
            {contactToUpdate && contactToUpdate.id === id && (
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
