import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';
// import CharacterList from './components/CharacterList';

const url = 'https://swapi.dev/api/people/'

export default function App() {
  const [characters, setCharacters] = useState([]);
  // const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    function getCharacters() {
      axios.get(url)
        .then(res => {
          const characters = res.data;
          console.log(characters);
          setCharacters(characters);
        })
        .catch(err => {
          console.log(err.message);
        })
    } getCharacters()
  }, [])

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div classname='Container'>
        {
          characters.map(char => <div key={char.id}>{char.name}</div>)
        }
        {/* <Character 
          borderColor = 'grey'
          name={Character.name}
          age={Character.age}
        /> */}
        {/* <button onClick={() => {setExpandable(!expendable)}}>View Details</button> */}
      </div>
    </div>
  );
}

