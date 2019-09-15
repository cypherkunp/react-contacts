import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import AppHeader from './components/app-header/app-header.component';
import ContactPage from './pages/contact-page/contact-page.component';
import HomePage from './pages/home-page/home-page.component';

class App extends Component {
  state = {
    currentUser: null
  };

  render() {
    return (
      <main className="App">
        <header className="">
          <AppHeader />
        </header>
        <Switch>
          <Route path="/create" component={ContactPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    );
  }
}

export default App;
