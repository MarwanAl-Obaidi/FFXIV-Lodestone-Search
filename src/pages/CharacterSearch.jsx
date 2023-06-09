import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../App.css';

function App() {
  const { t } = useTranslation(); // Access translation functions

  const [searchQuery, setSearchQuery] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setCharacters([]);
      return;
    }

    const timer = setTimeout(() => {
      // Fetch data from the XIVAPI character search API
      fetch(`https://xivapi.com/character/search?name=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacters(data.Results);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, 1000); // Delay of 1000 milliseconds (one second)

    return () => {
      clearTimeout(timer); // Clear the timer if the search query changes before the delay expires
    };
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>{t('characterSearch')}</h1>
      <form>
        <input
          className="Input"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder={t('searchPlaceholder')}
        />
      </form>

      <h2>{t('searchResults')}</h2>
      {characters.length > 0 ? (
        <div>
          {characters.map((character) => (
            <div key={character.ID}>
              <h2>
                <Link to={`/Character/${character.ID}`}>{character.Name}</Link>
              </h2>
              <img src={character.Avatar} alt={character.Name} />
            </div>
          ))}
        </div>
      ) : (
        <p>{t('noCharactersFound')}</p>
      )}
    </div>
  );
}

export default App;