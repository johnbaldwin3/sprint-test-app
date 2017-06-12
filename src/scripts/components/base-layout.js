import React, { Component } from 'react';
//import {NavLink} from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Some Cool People</h1>

        </div>
        {this.props.children}
        <footer><h5>Cool People, Cool Stuff</h5></footer>
      </div>

    )
  }
}

export default BaseLayout;
