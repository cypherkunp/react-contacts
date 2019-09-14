import React, { Component } from 'react';
import './contacts-page.styles.css';

import TableView from './../../components/table-view/tabel-view.component';
import contacts from './default-contacts';
import TagList from '../../components/tag-list/tag-list.component';
import CreateContact from '../../components/create-contact/create-contact.compoent';
import Menu from '../../components/menu/menu.component';

class ContactsPage extends Component {
  state = {
    contacts: null
  };

  componentDidMount() {
    this.setState({ contacts });
  }

  handleDelete = contact => {
    let contacts = [...this.state.contacts];
    contacts = contacts.filter(c => c._id !== contact._id);
    this.setState({ contacts });
  };

  render() {
    const { contacts } = this.state;

    if (!contacts) return <h1>Loading...</h1>;
    else
      return (
        <div className="contacts-page">
          <div className="labels-section">
            <div className="create-contact">
              <CreateContact />
            </div>
            <div className="tag-list">
              <TagList />
            </div>
          </div>
          <div className="contacts-section">
            <section className="section-banner">
              <Menu />
            </section>

            <div className="contact-table">
              <TableView data={contacts} onDelete={this.handleDelete} />
            </div>
          </div>
        </div>
      );
  }
}

export default ContactsPage;
