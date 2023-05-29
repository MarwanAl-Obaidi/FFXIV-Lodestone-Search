import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import '../App.css';

const Layout = () => {
    const { i18n } = useTranslation(); // Access translation functions and i18n object

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

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
                        <em>
                            <button class="locale" onClick={() => changeLanguage('en')}>English</button>
                            <button class="locale" onClick={() => changeLanguage('fr')}>French</button>
                            <button class="locale" onClick={() => changeLanguage('de')}>German</button>
                            <button class="locale" onClick={() => changeLanguage('jp')}>Japanese</button>
                        </em>
                    </div>
                </body>
            </div>
        </>
    );
};

export default Layout;