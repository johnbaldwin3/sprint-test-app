import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Link className="home-link" to="/people"><button className="home-button">Cool Actors</button></Link>
      </div>
    )
  }
}
