import React, { Component } from 'react';
import _ from 'lodash';

import Menu from '../../components/menu/menu.component';
import TableView from './../../components/table-view/tabel-view.component';

class ContactsView extends Component {
  state = { contacts: null, searchQuery: '' };

  componentDidMount = () => {
    this.setState({ contacts: this.props.data });
  };

  componentDidUpdate = () => {
    if (!_.isEqual(this.state.contacts, this.props.data)) this.setState({ contacts: this.props.data });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query });
  };

  getFilteredContacts = (contacts, searchQuery) => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.phone.includes(searchQuery.toLowerCase())
    );
  };

  render() {
    const { onDelete } = this.props;
    const { contacts, searchQuery } = this.state;
    let filteredContacts = contacts;

    if (!contacts) return null;
    if (searchQuery) filteredContacts = this.getFilteredContacts(contacts, searchQuery);

    return (
      <React.Fragment>
        <section className="section-banner">
          <Menu value={searchQuery} onSearch={this.handleSearch} />
        </section>
        <section className="contact-table">
          <TableView data={filteredContacts} onDelete={onDelete} />
        </section>
      </React.Fragment>
    );
  }
}

export default ContactsView;
