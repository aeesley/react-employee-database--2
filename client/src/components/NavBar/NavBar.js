import React from "react";
import './NavBar.css';

// Function that display nav bar at the top of the page
function NavBar() {
  return (
<nav>
  <span className="app-navbar">EMPLOYEE DIRECTORY</span>
  <p>Find an employee using the search function or sorting by name!</p>
</nav>
  );
}

export default NavBar;