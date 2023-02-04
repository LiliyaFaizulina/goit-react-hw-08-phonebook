import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as yup from 'yup';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import { IconButton } from '@mui/material';
import { updateContact } from 'redux/contacts/contactsOperations';
import { StyledForm } from './UpdateContactForm.styled';
import TextField from '@mui/material/TextField';

export const UpdateContactForm = ({ contact, closeForm }) => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup
      .string('Enter name')
      .min(2, 'Minimum length is 2 characters')
      .max(20, 'Maximum length is 20 characters')
      .required('Name is required'),
    phone: yup
      .string('Enter number')
      .min(5, 'Minimum length is 5 digits')
      .max(15, 'Maximum length is 15 digits')
      .required('Number is required'),
    email: yup
      .string('Enter email')
      .email('Enter a valid email')
      .required('Email is required'),
  });

  const { handleSubmit, values, handleChange, touched, errors } = useFormik({
    initialValues: {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(updateContact({ ...contact, ...values }));
      closeForm();
    },
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TextField
        variant="standard"
        aria-label="Name"
        onChange={handleChange}
        size="small"
        type="text"
        name="name"
        value={values.name}
        error={touched.name && Boolean(errors.name)}
        helperText={touched.name && errors.name}
      />
      <TextField
        variant="standard"
        aria-label="Phone"
        onChange={handleChange}
        size="small"
        type="tel"
        name="phone"
        value={values.phone}
        error={touched.phone && Boolean(errors.phone)}
        helperText={touched.phone && errors.phone}
      />
      <TextField
        variant="standard"
        aria-label="Email"
        onChange={handleChange}
        size="small"
        type="email"
        name="email"
        value={values.email}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
      />
      <IconButton
        aria-label="save"
        color="primary"
        style={{ position: 'absolute', right: '0', bottom: '0' }}
        variant="outlined"
        size="small"
        type="submit"
      >
        <SaveAltOutlinedIcon />
      </IconButton>
    </StyledForm>
  );
};

UpdateContactForm.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  closeForm: PropTypes.func.isRequired,
};
