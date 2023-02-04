import { Section } from 'components/Section/Section';
import { Title, List } from './HomePage.styled';
import { Text } from 'components/Common.styled';

export const HomePage = () => {
  return (
    <Section>
      <Title>PhoneBook</Title>
      <Text>
        Welcome to the Phonebook app! <br />
        Here you can create and save your contact list. To do this, you have to:
      </Text>
      <List>
        <li>Register to create your own account!</li>
        <li>Verify your email.</li>
        <li>Login and create your fist contact.</li>
      </List>
      <Text>Select "Registration" in the menu to get started!</Text>
    </Section>
  );
};
