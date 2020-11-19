import './App.css';
import NavBar from "./components/NavBar/NavBar.js";
import EmployeeCard from "./components/EmployeeCard.js";
import React, {useState, useEffect} from 'react';
import axios from "axios";

function App() {

  // Defining the state  
  const [state, setState] = useState({
    emps: [
      {name: 'tom', email: 'tom@gmail.com'},
      {name: 'alex', email: 'alex@gmail.com'},
      {name: 'aj', email: 'aj@gmail.com'}
    ],
    filteredEmps: []
  })

   // Function to handle the user input typing, grab the user input, and add to the newFilteredEmps array if there is a match from what the user input is and what is in our API database (all based on the name key)
   const handleTyping = (event) =>{
    console.log("we are typing", event.target.value.length);

    var newFilteredEmps = []

    state.emps.map(function(eachSingleThing) {
      // If our user input matches the API random user name, then push to the newFilteredEmps array
      if(event.target.value == eachSingleThing.name.first.substring(0,event.target.value.length)){
        console.log("we found a match");
        newFilteredEmps.push(eachSingleThing);
      }
    })
    // Change state of filteredEmps array within state to the newFilteredEmps array based on the user input match in the if/else statement above
    setState({...state, filteredEmps: newFilteredEmps })
    console.log("did we save?",newFilteredEmps)

  }

  // Helper function that makes sure the API data is only called once at the beginning of the client session (doesn't keep pulling constantly)
  useEffect(()=> {
    // Axios pull to grab 50 users from our random user API database
    axios.get('https://randomuser.me/api/?results=50').then(function(data){
      console.log('API DATA!!!!', data.data.results)
      setState({...state, emps: data.data.results})

    })

  }, [])

  // Creating variable to store "things to display" so we can change that state based on if there is user input in the search bar
  var thingToDisplay = state.emps

  if(state.filteredEmps.length > 0) {
    thingToDisplay = state.filteredEmps 
  }

  // RETURN ON THE PAGE
  return (
    <div className="App">
      <NavBar />
      <p>
      <input onChange={handleTyping}></input>
      </p>
      <p>Name</p>
      {thingToDisplay.map(function(eachSingleThing) {
        return (<EmployeeCard 
          name={eachSingleThing.name.first}
          email={eachSingleThing.email}
          cell={eachSingleThing.cell}
          />)
      })}
    </div>
  );
}

export default App;
