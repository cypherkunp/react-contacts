import React, { Component } from 'react';
import './contacts-page.styles.css';

import TableView from './../../components/table-view/tabel-view.component';
import contacts from './default-contacts';
import TagList from '../../components/tag-list/tag-list.component';
import CreateContact from '../../components/create-contact/create-contact.compoent';
import Menu from '../../components/menu/menu.component';

class ContactsPage extends Component {
    state = {
        contacts: []
    };

    componentDidMount() {
        this.setState({ contacts });
    }

    render() {
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
                    <section class="section-banner">
                        <Menu />
                    </section>

                    <div className="contact-table">
                        <TableView></TableView>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactsPage;
