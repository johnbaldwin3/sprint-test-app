import React from 'react';
import {Route, NavLink, Redirect} from 'react-router-dom';


import Actor from "./actor";
import { BillMurray, StevenSeagal, RobDowney } from "./data/actors.js";

const Peoples = ({match}) => {

    return (
      <div className="container" >
        <div className="pictures">

          <div className="steve">
            <NavLink activeClassName="selected" to={`${match.url}/steve`}>
              <img src="http://stevensegallery.com/300/300" alt="steven seagal" />
            </NavLink>
          </div>
          <div className="rob">
            <NavLink activeClassName="selected" to={`${match.url}/rob`}>
              <img src="http://rdjpg.com/300/300" alt="robert downey jr"/>
            </NavLink>
          </div>
          <div className="bill">
            <NavLink activeClassName="selected" to={`${match.url}/bill`}>
              <img src="http://fillmurray.com/300/300" alt="bill murray"/>
            </NavLink>
          </div>
        </div>

        <Route exact path={match.path} render={() => <Redirect to={`${match.path}/bill`}/>} />
        <Route path={`${match.path}/bill`} render={() => <Actor data={BillMurray}/>} />
        <Route path={`${match.path}/steve`} render={() => <Actor data={StevenSeagal}/>} />
        <Route path={`${match.path}/rob`} render={() => <Actor data={RobDowney}/>} />

      </div>
      );

  }

export default Peoples;
