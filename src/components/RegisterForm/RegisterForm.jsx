import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';

import { registerUser } from 'redux/auth/authOperation';
import { Form, Heading, StyledTextField } from 'components/Common.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    name: yup
      .string('Enter name')
      .required('Name is required')
      .min(2, 'Minimum length is 2 characters')
      .max(10, 'Maximum length is 10 characters'),
    email: yup
      .string('Enter your email')
      .required('Email is required')
      .email('Enter a valid email'),
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
        <StyledTextField
          label="Name"
          type="text"
          name="name"
          size="small"
          value={values.name}
          onChange={handleChange}
          placeholder="User name"
          required
          error={touched.name && Boolean(errors.name)}
          helperText={touched.name && errors.name}
        />
        <StyledTextField
          label="Email"
          type="email"
          name="email"
          size="small"
          value={values.email}
          onChange={handleChange}
          placeholder="email@example.com"
          required
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />

        <StyledTextField
          label="Password"
          type="password"
          name="password"
          size="small"
          value={values.password}
          onChange={handleChange}
          required
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button
          variant="contained"
          type="submit"
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};
