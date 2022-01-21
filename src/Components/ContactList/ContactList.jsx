import propTypes from 'prop-types';
import { ContactsList } from './ContactList.styled';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contactNames, deleteContact }) => {
  return (
    <ContactsList>
      {contactNames().map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ContactsList>
  );
};
export default ContactList;

ContactList.propTypes = {
  contactNames: propTypes.func.isRequired,
  deleteContact: propTypes.func.isRequired,
};
