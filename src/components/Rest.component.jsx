import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // useParams,
  // useRouteMatch,
  NavLink,
} from "react-router-dom";
import RestHome from "./RestHome.component";
import AllPersonRest from "./AllPersonRest.component";
import AddPersonRest from "./AddPersonRest.component";
import EditPersonRest from "./EditPersonRest.component";

const Rest = (props) => {
  const { facade } = props;

  return (
    <Router>
      <div>
        {/* {console.log(props)}
          {console.log(props.info)}
          {JSON.stringify(props.info)} */}
        <ul className="header">
          <li>
            <NavLink exact activeClassName="active" to="/rest-home">
              Rest Home
            </NavLink>
          </li>
          <li>
          <NavLink activeClassName="active" to="/person-rest">
              All Projects
            </NavLink>
          </li>
          
          <li>
            <NavLink activeClassName="active" to="/person-rest">
              All Developers
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/add-person-rest">
              Add Developer
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/edit-person-rest">
              Edit Developer
            </NavLink>
          </li>
          
        </ul>

        <Switch>
          <Route exact path="/rest-home">
            <RestHome />
          </Route>
          <Route path="/person-rest">
            <AllPersonRest facade={facade} />
          </Route>
          <Route path="/add-person-rest">
            <AddPersonRest facade={facade} />
          </Route>
          <Route path="/edit-person-rest">
            <EditPersonRest facade={facade} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Rest;