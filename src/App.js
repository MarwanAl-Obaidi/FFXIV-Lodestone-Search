import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [characters, setCharacters] = useState([]);

  const searchCharacters = async () => {
    const response = await axios.get(`https://xivapi.com/character/search?name=${name}`);
    const results = response.data.Results;
    if (results.length > 0) {
      const characterIds = results.map(result => result.ID);
      const characterResponses = await Promise.all(characterIds.map(id => axios.get(`https://xivapi.com/character/${id}`)));
      const charactersData = characterResponses.map(response => response.data);
      setCharacters(charactersData);
    } else {
      setCharacters([]);
    }
  };

  return (
    <div className="App">
      <input className='Input'
        type="text"
        placeholder="Enter character name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={searchCharacters}>Search</button>
      {characters.length > 0 ? (
        characters.map(character => (
          <div key={character.Character.ID}>
            <h2>{character.Character.Name}</h2>
            <img src={character.Character.Avatar} alt={character.Character.Name} />
            {/* <p>{character.Character.Bio}</p> */}
            
          </div>
        ))
      ) : (
        <p>No characters found.</p>
      )}
    </div>
  );
}

export default App;