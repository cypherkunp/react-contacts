import React, { Component } from 'react';
import Menu from '../../components/menu/menu.component';
import TableView from './../../components/table-view/tabel-view.component';

class ContactsView extends Component {
  state = { contacts: null, searchQuery: '' };

  componentDidMount = () => {
    this.setState({ contacts: this.props.data });
  };

  handleSearch = query => {
    console.log(query);
    this.setState({ searchQuery: query });
  };

  /*  getContacts = query => {
    let contacts = [...this.state.contacts];
    contacts;
  }; */

  render() {
    const { onDelete } = this.props;
    const { contacts, searchQuery } = this.state;

    let filteredContacts = contacts;
    if (!contacts) return null;
    if (searchQuery) {
      console.log(filteredContacts);

      filteredContacts = contacts.filter(
        contact =>
          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.phone.includes(searchQuery.toLowerCase())
      );
    }

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
