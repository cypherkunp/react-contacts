import React, { Component } from 'react';
import './contacts-page.styles.css';
import contacts from './default-contacts';
import tagList from './default-taglist';

import TagList from '../../components/tag-list/tag-list.component';
import CreateContact from '../../components/create-contact/create-contact.compoent';
import ContactsView from '../../components/contacts-view/contacts-view.components';

class ContactsPage extends Component {
  state = {
    contacts: null,
    tagList: null
  };

  componentDidMount() {
    this.setState({ contacts, tagList });
  }

  handleDelete = contact => {
    let contacts = [...this.state.contacts];
    contacts = contacts.filter(c => c._id !== contact._id);
    this.setState({ contacts });
  };

  render() {
    const { contacts, tagList } = this.state;

    if (!contacts) return <h1>Loading...</h1>;
    else
      return (
        <div className="contacts-page">
          <div className="labels-section">
            <div className="create-contact">
              <CreateContact />
            </div>
            <div className="tag-list">
              <TagList data={tagList} />
            </div>
          </div>
          <div className="contacts-section">
            <ContactsView data={contacts} onDelete={this.handleDelete} />
          </div>
        </div>
      );
  }
}

export default ContactsPage;
