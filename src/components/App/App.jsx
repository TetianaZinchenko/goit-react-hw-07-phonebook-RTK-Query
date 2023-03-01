import { useState } from 'react';

import PropTypes from 'prop-types';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, AppTitle } from './App.styled';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Section from 'components/Section';
import { Loader } from 'components/Loader';
import Filter from 'components/Filter';

import { useGetContactsQuery } from 'redux/contactsAPI';

const App = ({ title }) => {
  const [value, setValue] = useState('');
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  const handleChangeFilter = e => {
    setValue(e.target.value);
  };

  const resetFilter = () => {
    setValue('');
  };

  function showfilteredContacts() {
    const normalizedFilter = value.toLocaleLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const filteredContacts = showfilteredContacts();

  return (
    <Container>
      <AppTitle>{title}</AppTitle>
      <Section>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {error && (
          <div style={{ color: 'red', fontSize: '20px' }}>
            Ouch! Something went wrong. Please, reload the page and try again!
          </div>
        )}

        <Filter
          value={value}
          onChange={handleChangeFilter}
          onClick={resetFilter}
        />

        {isLoading ? (
          <Loader />
        ) : filteredContacts?.length > 0 ? (
          <ContactList contacts={filteredContacts} />
        ) : (
          <div style={{ color: 'red', fontSize: '20px' }}>No any contacts!</div>
        )}
      </Section>
      <ToastContainer autoClose={3000} theme={'colored'} />
    </Container>
  );
};

export default App;

App.propTypes = {
  title: PropTypes.string,
};
