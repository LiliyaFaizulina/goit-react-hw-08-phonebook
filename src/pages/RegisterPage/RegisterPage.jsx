import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/Section/Section';

const RegisterPage = () => {
  return (
    <Section title="Create new user">
      <RegisterForm />
    </Section>
  );
};

export default RegisterPage;
