import React, { Component } from 'react';
import '../../styles/App.css';
import { Link } from 'react-router-dom';

import Peoples from './peoples';

export default class App extends Component {
  render() {
    return (

        <div className="App main">
          <Peoples />
        </div>

    );
  }
}
