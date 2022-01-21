import propTypes from 'prop-types';
import { ContactName, ContactNumber, Button } from './ContactItem.styled';
const ContactItem = ({ contact, deleteContact }) => {
  return (
    <>
      <ContactName>{contact.name}:</ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <Button type="button" id={contact.id} onClick={deleteContact}>
        Delete
      </Button>
    </>
  );
};
export default ContactItem;

ContactItem.propTypes = {
  deleteContact: propTypes.func.isRequired,
};
