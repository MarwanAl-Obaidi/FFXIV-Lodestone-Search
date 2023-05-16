import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Character() {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await axios.get(`https://xivapi.com/character/${id}`);
            setCharacter(response.data);
        };

        fetchCharacter();
    }, [id]);

    if (!character) {
        return <p>Loading character...</p>;
    }

    return (
        <div>
            <h2>{character.Character.Name}</h2>
            <img src={character.Character.Portrait} alt={character.Character.Name} width={500} />
            {/* Display other character details here */}
        </div>
    );
}

export default Character;