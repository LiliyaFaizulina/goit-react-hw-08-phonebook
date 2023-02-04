import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import { loginUser } from 'redux/auth/authOperation';
import { Form, Heading, StyledTextField } from 'components/Common.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
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
        email: '',
        password: '',
      },
      validationSchema: validationSchema,
      onSubmit: values => {
        dispatch(loginUser(values));
        resetForm();
      },
    });

  return (
    <>
      <Heading>Authorization</Heading>
      <Form onSubmit={handleSubmit}>
        <StyledTextField
          label="Email"
          type="email"
          name="email"
          value={values.email}
          size="small"
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
          placeholder="password"
          required
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Login
        </Button>
      </Form>
    </>
  );
};
