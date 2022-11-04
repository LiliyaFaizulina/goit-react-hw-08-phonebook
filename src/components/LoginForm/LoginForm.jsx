import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { loginUser } from 'redux/auth/authOperation';
import { Form, Heading } from 'components/Common.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Heading>Authorization</Heading>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleInput}
          placeholder="email@example.com"
          required
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleInput}
          placeholder="password"
          required
        />

        <Button type="submit" variant="contained">
          Login
        </Button>
      </Form>
    </>
  );
};
