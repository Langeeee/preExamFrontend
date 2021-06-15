import React, { useState, useEffect } from "react";
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useParams,
  useRouteMatch,
  // NavLink,
} from "react-router-dom";
import DeveloperCard from "./DeveloperCard.component";

const AllDeveloperRest = (props) => {
  const { facade } = props;
  let { path, url } = useRouteMatch();

  const emptyArray = [];
  const [developers, setDeveloper] = useState([...emptyArray]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    facade.getDevelopersRest((data) => {
      console.log(data);
      setDevelopers([...data]);
    });
  }, []);

  useEffect(() => {
    facade.getDevelopersRest((data) => {
      console.log(data);
      setDevelopers([...data]);
    });
  }, [update]);

  const deleteDeveloper = (event) => {
    console.log(event.target.id);
    const id = event.target.id;
    facade.deleteDeveloperRest(id, (data) => {
      console.log(data);
      setUpdate(() => update + 1);
    });
  };

  return (
    <div>
      {/* {JSON.stringify(maps)} */}
      <br />
      <h3 className="text-center">Fetch Persons With Rest</h3>
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">BillingPrHour</th>
            <th scope="col">Link</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {developers.map((developer) => (
            <tr key={developer.id} style={{ cursor: "pointer" }}>
              <td>{developer.id}</td>
              <td>{developer.name}</td>
              <td>{developer.email}</td>
              <td>{developer.billingprhour}</td>
              {/* <td>{person.hobbies.map(hobby => <span key={hobby.id}>{hobby.name}</span>)}</td> */}
              {/* <td>{person.hobbies[0].name}</td> */}
              <td>
                {developer.projects.length > 1
                  ? developer.projects[0].name +
                    " (+" +
                    (developer.projects.length - 1) +
                    ")"
                  : developer.projects[0].name}
              </td>
              <td>
                <Link to={`${url}/${developer.id}`}>View projects</Link>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  id={developer.id}
                  onClick={deleteDeveloper}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a developer.</h3>
        </Route>
        <Route path={`${path}/:developerId`}>
          <DeveloperCard developers={developers} />
        </Route>
      </Switch>
    </div>
  );
};

export default AlldeveloperRest;
