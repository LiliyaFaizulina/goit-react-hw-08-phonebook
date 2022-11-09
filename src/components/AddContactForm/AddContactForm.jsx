import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { Form } from 'components/Common.styled';
import { Heading } from 'components/Common.styled';

export const AddContactForm = () => {
  const contacts = useSelector(selectContacts);
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

  const { handleSubmit, values, handleChange, touched, errors, resetForm } =
    useFormik({
      initialValues: {
        name: '',
        number: '',
      },
      validationSchema: validationSchema,
      onSubmit: values => {
        const newName = values.name.toLowerCase();
        if (contacts.some(contact => contact.name.toLowerCase() === newName)) {
          alert(`${values.name} is already in contacts`);
          return;
        }
        dispatch(addContact(values));
        resetForm();
      },
    });

  return (
    <div>
      <Heading>Add new contact</Heading>
      <Form onSubmit={handleSubmit}>
        <TextField
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

        <TextField
          label="Phone"
          onChange={handleChange}
          size="small"
          type="tel"
          name="number"
          value={values.number}
          error={touched.number && Boolean(errors.number)}
          helperText={touched.number && errors.number}
          required
        />

        <Button type="submit" variant="contained" size="small">
          Add contact
        </Button>
      </Form>
    </div>
  );
};
