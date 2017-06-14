import React, { Component } from 'react';
import '../../styles/App.css';
import { Link } from 'react-router-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './home';
import Peoples from './peoples';
import BaseLayout from './base-layout';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/people" component={Peoples} />
            <Route path="/people/:actor" component={Peoples} />

          </Switch>
        </BaseLayout>
      </BrowserRouter>


    );
  }
}
