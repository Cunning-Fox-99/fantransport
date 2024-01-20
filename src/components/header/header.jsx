import React, {useState} from 'react'
import './header.scss'
import logo from './logo.svg'

import {Link} from "react-router-dom";
import LanguageSwitcher from "./language-switcher/language-switcher";

export default function Header({setLang, lang}) {

    const [active, setActive] = useState(false)




    return <div className="header">
        <div className="header__row container">
            <Link to="/" className="header__column header__column--1">
                <img src={logo} alt=""/>
            </Link>

            <div className="header__column header__column--2">

                <div className="header__contacts-wrapper">

                    <div className="header__contact">
                        <Link to="tel:+49 (179) 1115192">+49 (179) 1115192</Link>
                        <span>Alexandru Craciunescu</span>
                    </div>

                    <div className="header__contact">
                        <Link to="tel:+49 (155) 10096948" >+49 (155) 10096948</Link>
                        <span>Augustin Romanat</span>
                    </div>

                </div>

                <div className="header__items">

                    <LanguageSwitcher changeLang={(val) => setLang(val)}/>

                    <Link to={'/contact'} className="header__button button">{lang === 'DE' ? 'Anrufe' : lang === 'EN' ? 'Calls' : lang === 'RU' ? 'Звонок' : 'Apel'}</Link>

                    <div className={active ? "header__mobile-button active" : "header__mobile-button"}
                         onClick={() => setActive(prevState => !prevState)}>
                        <div className="header__mobile-button-button"></div>
                    </div>

                    {active && <div className="header__menu" onClick={() => setActive(false)}>

                        <div className="header__menu-nav">
                            <Link to="/">
                                {lang === 'DE' ? 'Hauptseite' : lang === 'EN' ? 'Main page' : lang === 'RU' ? 'Главная' : 'Acasă'}
                            </Link>
                            <Link to="/about-us">
                                {lang === 'DE' ? 'Über uns' : lang === 'EN' ? 'About us' : lang === 'RU' ? 'О нас' : 'Despre noi'}
                            </Link>
                            <Link to="/services">
                                {lang === 'DE' ? 'Dienst' : lang === 'EN' ? 'Service' : lang === 'RU' ? 'Услуги' : 'Servicii'}
                            </Link>

                            <Link to="/contact">
                                {lang === 'DE' ? 'Kontakt' : lang === 'EN' ? 'Contact' : lang === 'RU' ? 'Контакты' : 'Contacte'}
                            </Link>

                        </div>

                        <div className="header__mobile-contacts">

                            <div className="header__mobile-contact">
                                <Link to="tel:+49 (179) 1115192">+49 (179) 1115192</Link>
                                <span>Alexandru Craciunescu</span>
                            </div>

                            <div className="header__mobile-contact">
                                <Link to="tel:+49 (155) 10096948" >+49 (155) 10096948</Link>
                                <span>Augustin Romanat</span>
                            </div>

                            <Link to={'/contact'} className="header__button-mobile button">
                                {lang === 'DE' ? 'Anrufe' : lang === 'EN' ? 'Calls' : lang === 'RU' ? 'Звонок' : 'Apel'}
                            </Link>

                        </div>

                    </div> }

                </div>

            </div>
        </div>

        <div className="header__nav">
            <div className="header__nav-wrapper container">
                <Link to="/" className="header__link">
                    {lang === 'DE' ? 'Hauptseite' : lang === 'EN' ? 'Main page' : lang === 'RU' ? 'Главная' : 'Acasă'}
                </Link>
                <Link to="/about-us" className="header__link">
                    {lang === 'DE' ? 'Über uns' : lang === 'EN' ? 'About us' : lang === 'RU' ? 'О нас' : 'Despre noi'}
                </Link>
                <Link to="/services" className="header__link">
                    {lang === 'DE' ? 'Dienst' : lang === 'EN' ? 'Service' : lang === 'RU' ? 'Услуги' : 'Servicii'}
                </Link>

                <Link to="/contact" className="header__link">
                    {lang === 'DE' ? 'Kontakt' : lang === 'EN' ? 'Contact' : lang === 'RU' ? 'Контакты' : 'Contacte'}
                </Link>

            </div>
        </div>
    </div>
}