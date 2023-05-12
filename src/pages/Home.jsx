import { Link } from "react-router-dom";
import React from 'react';
import '../App.css';

function Home() {
    return (
        <div>
            <h1>FFXIV Lodestone Search</h1>
            <Link to="/CharacterSearch">Character Search</Link>
            <div></div>
            <Link to="/About">About</Link>
        </div>
    );
}

export default Home;