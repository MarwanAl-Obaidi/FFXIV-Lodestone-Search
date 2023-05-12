import { Link } from "react-router-dom";
import React from 'react';
import '../App.css';

function NoPage() {
    return (
        <div>
            <h1>There is nothing here.</h1>
            <Link to="/">Home</Link>
        </div>
    );
}

export default NoPage;