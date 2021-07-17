import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Character from "./components/Character"
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
    .then((response) => {
      setCharacters(response.data)
      // console.log(response.data)
    })
    .catch(errors => console.log(errors))
  },[]);

  // sync up with, if any.

  return (
    <div className="App">
      <Character data={characters} />
    </div>
  );
}

export default App;
