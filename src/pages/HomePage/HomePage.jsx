import { Section } from 'components/Section/Section';
import { Title } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Section>
      <Title>PhoneBook</Title>
      <p>
        Welcome to the Phonebook app! Here you can create and save your contact
        list. To do this, you have to register to create your own account!
        Select "Registration" in the menu to get started!
      </p>
    </Section>
  );
};
