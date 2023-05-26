import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
    return (
        <>
            <div className='navBar'>
                <div>
                    <header>
                        {/* <Link to="/" class="logo">HOME</Link> */}
                        <ul class="navbar">
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/CharacterSearch">CHARACTER SEARCH</Link>
                            </li>
                            <li>
                                <Link to="/Servers">SERVERS</Link>
                            </li>
                            <li>
                                <Link to="/News">NEWS</Link>
                            </li>
                            <li>
                                <Link to="/About">ABOUT</Link>
                            </li>
                        </ul>
                    </header>
                </div>
                <Outlet />
                <body>
                    <div className='BottomText'>
                        <br />
                        <em>Marwan Al-Obaidi - 2023</em>
                    </div>
                </body>
            </div>
        </>
    );
};

export default Layout;