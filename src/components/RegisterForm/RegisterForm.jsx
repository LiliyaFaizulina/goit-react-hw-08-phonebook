import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { registerUser } from 'redux/auth/authOperation';
import { Form, Heading } from 'components/Common.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup
      .string('Enter name')
      .min(2, 'Name should be of minimum 2 characters length')
      .required('Name is required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(6, 'Password should be of minimum 6 characters length')
      .required('Password is required'),
  });
  const { handleSubmit, values, handleChange, touched, errors, resetForm } =
    useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      validationSchema: validationSchema,
      onSubmit: values => {
        dispatch(registerUser(values));
        resetForm();
      },
    });

  return (
    <>
      <Heading>Create new account</Heading>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="User name"
          required
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          placeholder="email@example.com"
          required
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
