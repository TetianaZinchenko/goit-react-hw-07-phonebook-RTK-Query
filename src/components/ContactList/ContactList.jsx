import React from 'react';
import PropTypes from 'prop-types';

import { Contacts } from './ContactList.styled';

import ContactListItem from '../ContactListItem';

export default function ContactList({ contacts }) {
  return (
    <Contacts>
      {contacts.map(contact => {
        const { id, name, phone } = contact;
        return <ContactListItem key={id} id={id} name={name} phone={phone} />;
      })}
    </Contacts>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
