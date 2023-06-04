import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import '../App.css';

function NoPage() {
    const { t } = useTranslation(); // Access translation functions

    return (
        <div>
            <h1>{t('noPage')}</h1>
            <h2><Link to={"/"}>{t('noPageHome')}</Link></h2>
        </div>
    );
}

export default NoPage;