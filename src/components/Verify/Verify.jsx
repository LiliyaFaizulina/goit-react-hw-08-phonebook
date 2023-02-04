import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';

import Button from '@mui/material/Button';
import { Form, StyledTextField, Text } from 'components/Common.styled';

import { verifyUser } from 'redux/auth/authOperation';

export const Verify = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  });

  const { handleSubmit, values, handleChange, touched, errors, resetForm } =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema: validationSchema,
      onSubmit: values => {
        dispatch(verifyUser(values));
        resetForm();
      },
    });
  return (
    <>
      <Text>
        To confirm your mail, follow the link in the letter that was sent to
        your email after registration. If you didn't receive a confirmation
        email, you can resend your request.
      </Text>
      <Form onSubmit={handleSubmit}>
        <StyledTextField
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

        <Button type="submit" variant="contained">
          Resent
        </Button>
      </Form>
    </>
  );
};
