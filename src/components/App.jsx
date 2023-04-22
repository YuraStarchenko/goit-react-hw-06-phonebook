import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from '../GlobalStyle';
import { Container, Text, Title, TitleText, Book } from './Container.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const App = () => {


	
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };

    contacts.filter(contact => contact.name === data.name).length
      ? Notify.info(`${newContact.name} is already in contacts`)
      : setContacts(prevState => [...prevState, newContact]);
  };

  const handleRemoveContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const handleFilterContact = e => {
    setFilter(e.currentTarget.value);
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Book>
        <TitleText>Phonebook</TitleText>
        <ContactForm onSubmit={formSubmitHandler} />
        <Title>Contacts</Title>
        <Text>find contact by name</Text>
        <Filter filter={filter} onChange={handleFilterContact} />
        <ContactList contacts={filterContacts} onRemove={handleRemoveContact} />
      </Book>
      <GlobalStyle />
    </Container>
  );
};