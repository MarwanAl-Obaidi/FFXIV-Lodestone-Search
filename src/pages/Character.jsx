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
            <h1>{character.Character.Name}</h1>
            <img src={character.Character.Portrait} alt={character.Character.Name} width={250} />
            {/* Display other character details here */}
            <h3>Job: {character.Character.ActiveClassJob.Name}</h3>
            <h3>Server: {character.Character.Server}</h3>
            <h3>Free Company: {character.Character.FreeCompanyName}</h3>
            {character.Character.Gender < 2 ? (
                <h3>Gender: Male</h3>
            ) : (
                <h3>Gender: Female</h3>
            )}
        </div>
    );
}

export default Character;