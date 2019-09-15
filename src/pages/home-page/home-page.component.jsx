import React, { Component } from 'react';
import './home-page.styles.css';

import { getLabelsWithCount, decrementLabelCount } from '../../modal/contact-labels';
import { getContacts, deleteContact } from '../../modal/contact-data';

import TagList from '../../components/tag-list/tag-list.component';
import ContactsView from '../../components/contacts-view/contacts-view.components';
import CustomLink from '../../components/common-components/custom-link/custom-link.compoent';

class HomePage extends Component {
  state = {
    contacts: null,
    tagList: null
  };

  componentDidMount() {
    this.setState({ contacts: getContacts(), tagList: getLabelsWithCount() });
  }

  handleDelete = contact => {
    let contacts = [...this.state.contacts];
    contacts = contacts.filter(c => c._id !== contact._id);
    deleteContact(contact);
    decrementLabelCount(contact.label);
    this.setState({ contacts, tagList: getLabelsWithCount() });
  };

  render() {
    const { contacts, tagList } = this.state;

    if (!contacts) return <h1>Loading...</h1>;
    else
      return (
        <div className="contacts-page">
          <div className="labels-section">
            <div className="create-contact">
              <CustomLink to="/create">Create Contact</CustomLink>
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

export default HomePage;
