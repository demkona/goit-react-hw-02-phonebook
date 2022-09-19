import React, { Component } from 'react';
import { Section } from './Section/Section'
import { Form } from './From/Form'
import { ContactList } from './ContactList/ContactList'
import { Filter } from './Filter/Filter'
import './App.module.css'

export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact =>
        contact.id !== contactId
      ),
    }));
  };

  formSubmitHandler = ({ id, name, number }) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <Section title="Phonebook" />
        <Form contacts={contacts} onSubmit={this.formSubmitHandler} />
        <Section title="Contacts" />
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onChange={this.changeFilter}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
