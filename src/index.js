import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import the i18n configuration
import Layout from './pages/Layout';
import Home from './pages/Home';
import CharacterSearch from './pages/CharacterSearch';
import About from './pages/About';
import Servers from './pages/Servers';
import News from './pages/News';
import NoPage from './pages/NoPage';
import Character from './pages/Character';
import './App.css';

ReactDOM.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="CharacterSearch" element={<CharacterSearch />} />
          <Route path="About" element={<About />} />
          <Route path="Servers" element={<Servers />} />
          <Route path="News" element={<News />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Character/:id" element={<Character />} />
        </Route>
      </Routes>
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);