import { useEffect } from 'react';

import { toast } from 'react-toastify';

import { HiOutlineUserCircle, HiOutlinePhone } from 'react-icons/hi';
import { FaRegTrashAlt } from 'react-icons/fa';

import {
  Contact,
  ContactName,
  ContactNumber,
  Container,
  MainContainer,
} from './ContactListItem.styled';

import { useDeleteContactMutation } from 'redux/contactsAPI';

import IconButton from 'components/IconButton';

export default function ContactListItem({ id, name, phone }) {
  const [deleteContact, { isLoading, isSuccess, isError }] =
    useDeleteContactMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success(`Contact ${name} was removed from your phonebook!`);
    }
  }, [isSuccess, name]);

  useEffect(() => {
    if (isError) {
      toast.error('Ouch! Something went wrong. Please, try again!');
    }
  }, [isError]);

  return (
    <Contact key={id}>
      <MainContainer>
        <Container>
          <HiOutlineUserCircle size={20} color="#400080" />
          <ContactName>{name}</ContactName>
        </Container>
        {isLoading ? (
          <ContactNumber>Deleting...</ContactNumber>
        ) : (
          <Container>
            <HiOutlinePhone size={20} color="#400080" />
            <ContactNumber>{phone}</ContactNumber>
          </Container>
        )}
      </MainContainer>
      <IconButton
        type="button"
        aria-label="For delete contact"
        onClick={() => deleteContact(id)}
      >
        <FaRegTrashAlt />
      </IconButton>
    </Contact>
  );
}
