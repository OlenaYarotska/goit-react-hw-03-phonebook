import './App.css';
import React from 'react';
import { nanoid } from 'nanoid';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import ContactForm from './Components/ContactForm/ContactForm';
import { Section, Heading } from './App.styled';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const getContacts = localStorage.getItem(this.contacts);
    const parsedContacts = JSON.parse(getContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(
        this.getContacts,
        JSON.stringify(this.state.contacts),
      );
    }
  }

  contactNames = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

  addContact = contact =>
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          ...contact,
        },
      ],
    }));

  deleteContact = evt => {
    const targetId = evt.target.id;
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== targetId),
    }));
  };
  filterContacts = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };
  dublicateNameCheck = name =>
    this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

  render() {
    return (
      <>
        <Heading>Phonebook</Heading>
        <ContactForm
          dublicateNameCheck={this.dublicateNameCheck}
          addContact={this.addContact}
        />
        <Section title="Contacts">Contacts</Section>
        <Filter
          filterContacts={this.filterContacts}
          filter={this.state.filter}
        />
        <ContactList
          contactNames={this.contactNames}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
