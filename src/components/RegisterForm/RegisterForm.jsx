import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { registerUser } from 'redux/auth/authOperation';
import { Form, Heading } from 'components/Common.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(registerUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Heading>Create new account</Heading>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          placeholder="User name"
          required
        />
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
          required
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
