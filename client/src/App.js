import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import TableHead from "./components/TableHead/TableHead.js";
import EmployeeCard from "./components/EmployeeCard.js";
import React, {useState, useEffect} from 'react';
import axios from "axios";

function App() {

  // Defining the state  
  const [state, setState] = useState({
    emps: [],
    filteredEmps: []
  })

   // Function to handle the user input typing, grab the user input, and add to the newFilteredEmps array if there is a match from what the user input is and what is in our API database (all based on the name key)
   const handleTyping = (event) =>{

    var newFilteredEmps = []

  // console.log("state.emp", state.emps);    
    state.emps.map(function(eachEmployee) {
      // If our user input matches the API random user name, then push to the newFilteredEmps array
      if(event.target.value == eachEmployee.name.first.substring(0,event.target.value.length)){
        newFilteredEmps.push(eachEmployee);
      }
    })
    // Change state of filteredEmps array within state to the newFilteredEmps array based on the user input match in the if/else statement above
    setState({...state, filteredEmps: newFilteredEmps })

  }

    // Helper function that makes sure the API data is only called once at the beginning of the client session (doesn't keep pulling constantly)
    useEffect(()=> {
      // Axios pull to grab 50 users from our random user API database
      axios.get('https://randomuser.me/api/?results=50').then(function(data){
        setState({...state, emps: data.data.results})
  
      })
  
    }, [])

    const sortName = () => {
      const sort = state.emps.sort(function(a, b){
        var nameA=a.name.first.toLowerCase(), nameB=b.name.first.toLowerCase();
        if (nameA < nameB) //sort string ascending
         return -1;
        if (nameA > nameB)
         return 1;
        return 0; //default return value (no sorting)
       });
       setState({...state, emps: sort})
    }

  // Creating variable to store "things to display" so we can change that state based on if there is user input in the search bar
  var thingToDisplay = state.emps

  if(state.filteredEmps.length > 0) {
    thingToDisplay = state.filteredEmps 
  }

  // RETURN ON THE PAGE
  return (
    <div className="App">
      <NavBar />
      <br/>
      <p>Search for an Employee:
      <input onChange={handleTyping}></input>
      </p>
      <TableHead sortName = {sortName}/>
      {thingToDisplay.map(function(eachEmployee) {
        return (<EmployeeCard 
          name={eachEmployee.name.first}
          email={eachEmployee.email}
          cell={eachEmployee.cell}
          />)
      })}
    </div>
  );
}

export default App;
