import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function NoPage() {
    return (
        <div>
            <h1>There is nothing here.</h1>
            <h2><Link to={"/"}>Home</Link></h2>
        </div>
    );
}

export default NoPage;