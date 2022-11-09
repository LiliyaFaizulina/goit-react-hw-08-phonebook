import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { updateContact } from 'redux/contacts/contactsOperations';
import { StyledForm } from './UpdateContactForm.styled';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export const UpdateContactForm = ({ contact, closeForm }) => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup
      .string('Enter name')
      .min(2, 'Name should be of minimum 2 characters length')
      .required('Name is required'),
    number: yup
      .string('Enter number')
      .min(5, 'Number should be of minimum 5 digits length')
      .required('Number is required'),
  });

  const { handleSubmit, values, handleChange, touched, errors } = useFormik({
    initialValues: {
      name: contact.name,
      number: contact.number,
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
        name="number"
        value={values.number}
        error={touched.number && Boolean(errors.number)}
        helperText={touched.number && errors.number}
      />
      <Button variant="outlined" size="small" type="submit">
        Save
      </Button>
    </StyledForm>
  );
};

UpdateContactForm.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  closeForm: PropTypes.func.isRequired,
};
