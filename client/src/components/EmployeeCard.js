import React from "react";
import './EmployeeCard.css';

// Function that displays the employee card
function EmployeeCard(props) {
    return (
      <div className="container card">
        <div className="row">
          <div className="col-sm">
            {props.name}
          </div>
          <div className="col-sm">
            {props.email}
          </div>
          <div className="col-sm">
            {props.cell}
          </div>
        </div>
    </div>
    );
  }
  
  export default EmployeeCard;