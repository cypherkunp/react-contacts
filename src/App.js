import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import ContactsPage from './pages/contacts-page/contacts-page.component';

class App extends Component {
    state = {
        currentUser: null
    };

    render() {
        return (
            <div className="App">
                <header className="">
                    <Header></Header>
                </header>
                <Switch>
                    <Route path="/" component={ContactsPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
