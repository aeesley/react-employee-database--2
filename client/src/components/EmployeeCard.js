import React from "react";
import './EmployeeCard.css';


function EmployeeCard(props) {
  //console.log('proppsss!!! in the employee! card!!', props)
    return (
      <div className="container card">
        <div className="row">
          <div className="col-sm employeerow">
            IMG
          </div>
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