import React from "react";
import Link from "react";
let user;
function ScrollIndicator() {
  return (
    <div>
      <Link to={`/users/${user.id}`} activeClassName="active">
        {user.name}
      </Link>
      {/* // becomes one of these depending on your History and if the route is //
      active */}
      <a href="/users/123" class="active">
        Michael
      </a>
      <a href="#/users/123">Michael</a>
      {/* // change the activeClassName */}
      <Link to={`/users/${user.id}`} activeClassName="current">
        {user.name}
      </Link>
      {/* // change style when link is active */}
      <Link
        to="/users"
        style={{ color: "white" }}
        activeStyle={{ color: "red" }}
      >
        Users
      </Link>
    </div>
  );
}
export default ScrollIndicator