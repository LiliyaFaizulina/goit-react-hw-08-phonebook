import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Form, Heading, Box, StyledTextField } from 'components/Common.styled';
import { toast } from 'react-toastify';

export const AddContactForm = () => {
  const contacts = useSelector(selectContacts);
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

  const { handleSubmit, values, handleChange, touched, errors, resetForm } =
    useFormik({
      initialValues: {
        name: '',
        phone: '',
        email: '',
      },
      validationSchema: validationSchema,
      onSubmit: values => {
        const newName = values.name.toLowerCase();
        if (contacts.some(contact => contact.name.toLowerCase() === newName)) {
          toast.error(`${values.name} is already in contacts`);
          return;
        }
        dispatch(addContact(values));
        resetForm();
      },
    });

  return (
    <Box>
      <Heading>Add new contact</Heading>
      <Form onSubmit={handleSubmit}>
        <StyledTextField
          label="Name"
          onChange={handleChange}
          size="small"
          type="text"
          name="name"
          value={values.name}
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
          required
        />

        <StyledTextField
          label="Phone"
          onChange={handleChange}
          size="small"
          type="tel"
          name="phone"
          value={values.phone}
          error={touched.phone && Boolean(errors.phone)}
          helperText={touched.phone && errors.phone}
          required
        />
        <StyledTextField
          label="Email"
          onChange={handleChange}
          size="small"
          type="email"
          name="email"
          value={values.email}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          required
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Add contact
        </Button>
      </Form>
    </Box>
  );
};
