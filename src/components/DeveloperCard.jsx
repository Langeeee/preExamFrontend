import React, { useState, useEffect } from "react";

import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  useParams,
  // useRouteMatch,
  // NavLink,
} from "react-router-dom";

export default function DeveloperCard(props) {
    const {developers} = props
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { develoerId } = useParams();

  // const [info, setInfo] = useState([...props.info]);
  // useEffect(() => setInfo([ ...props.info ]), [props.info]);

  const developer = developer.find((d) => d.id === parseInt(developerId));

  return (
    <div>
      {/* {JSON.stringify(person)} */}
      {/* {console.log(persons)} */}
      {/* {console.log(person)} */}
      {/* {console.log(personId)} */}
      <h3>Hobby Data:</h3>
      <p>The list of hobbies: {developer.projects.map(project => project.name).join(",")}</p>
    </div>
  );
}