import { Snackbar, Alert } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/authSelectors';
import { selectError } from 'redux/contacts/contactsSelectors';

export const Notification = () => {
  const [open, setOpen] = useState(false);
  const authError = useSelector(selectAuthError);
  const error = useSelector(selectError);

  useEffect(() => {
    if (error || authError) {
      setOpen(true);
    }
  }, [error, authError]);

  const closeNotify = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={closeNotify}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity="error" sx={{ width: '100%' }}>
        {authError}
        {error && 'Sorry, server connection error, try again later'}
      </Alert>
    </Snackbar>
  );
};
