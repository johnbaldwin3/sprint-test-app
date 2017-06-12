import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';

import PeopleContainer from ''
const Peoples = ({match}) => {

    return (
      <div className="pictures">
        <div className="bill">
          <NavLink to={`${match.url}/bill`}><img src="http://fillmurray.com/300/300" /></NavLink>
        </div>
        <div className="steve">
          <img src="http://stevensegallery.com/300/300" />
        </div>
        <div className="rob">
          <img src="http://rdjpg.com/300/300" />
        </div>
        <Route exact path={match.path} render={() => <Redirect to={`${match.path}/bill`}/>}/>
      </div>
      );

  }

export default PeopleContainer;
