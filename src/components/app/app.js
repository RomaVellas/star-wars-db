import React, { Component } from 'react';

import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';

import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  SecretPage, 
  LoginPage } from '../pages';

import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/layout';
import { ItemStarship } from '../item-starship/item-starship';

export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
        <Router>
          <div className="stardb-app">
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<h2>Welcome to Star Wars!</h2>} />
                <Route path='people/:id?' element={<PeoplePage/>}/>
                <Route path='planets' element={<PlanetsPage/>}/>
                <Route path='starships' element={<StarshipsPage/>}/>
                <Route path='starships/:id' element={<ItemStarship />}/>
                <Route path='login' element={<LoginPage
                                    isLoggedIn={isLoggedIn}
                                    onLogin={this.onLogin}/>}/>
                <Route path='secret' element={<SecretPage isLoggedIn={isLoggedIn}/>}/>
                <Route path="*" element={<h2>Page not found!</h2>}/>
              </Route>
            </Routes>
          </div>
        </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
