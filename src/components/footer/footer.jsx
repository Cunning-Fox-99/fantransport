import React, {useState} from "react";
import logo from './logo.svg'
import {Link} from "react-router-dom";
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import watsApp from './watsApp.svg'
import youtube from './youtube.svg'
import locationSvg from './location.svg'
import './footer.scss'
import './social-list.scss'


export default function Footer({lang}) {

    const [email, setEmail] = useState('')

    const sendMail = (e) => {
        e.preventDefault()
        const config = {
            // SecureToken: "409d7303-edc1-448c-955f-8d6d4740fd82",
            To: "fanmoebeltransport@gmail.com",
            From: "fox.dolor.96@gmail.com",
            Subject: `Message from ${email}`,
            Body: `Hello! Please write me in ${email}`
        }
       window.Email.send(config).then(r => {
           console.log(r)
           setEmail('Send')
           setTimeout(() => {
               setEmail('')
           }, 2000)
       })
    };

    return <div className="footer">

        <div className="footer__wrapper container">

            <div className="footer__column footer__column--1">
                <img src={logo} alt=""/>
                <span>ⓒ All right reserved 2023</span>
            </div>

            <div className="footer__column footer__column--2">
                <div className="footer__inner-column">
                    <Link to="/" className="footer__link">
                        {lang === 'DE' ? 'Hauptseite' : lang === 'EN' ? 'Main page' : lang === 'RU' ? 'Главная' : 'Acasă'}
                    </Link>
                    <Link to="/about-us" className="footer__link">
                        {lang === 'DE' ? 'Über uns' : lang === 'EN' ? 'About us' : lang === 'RU' ? 'О нас' : 'Despre noi'}
                    </Link>
                    <Link to="/services" className="footer__link">
                        {lang === 'DE' ? 'Dienst' : lang === 'EN' ? 'Service' : lang === 'RU' ? 'Сервисы' : 'Servicii'}
                    </Link>
                </div>
                <div className="footer__inner-column">
                    <Link to="/contact" className="footer__link">
                        {lang === 'DE' ? 'Kontakt' : lang === 'EN' ? 'Contact' : lang === 'RU' ? 'Контакты' : 'Contacte'}
                    </Link>

                </div>
            </div>

            <div className="footer__column footer__column--3">
                <span>
                    {lang === 'DE' ?
                        'Gestalten Sie Ihr Zuhause oder Büro gemütlich und wunderbar mit Hilfe unserer Dienstleistungen.'
                        : lang === 'EN' ? 'Make your home or office cozy and wonderful with the help of our services.'
                            : lang === 'RU' ? 'Сделайте свой дом или офис уютным и прекрасным с помощью наших услуг.'
                                : 'Faceți-vă casa sau biroul confortabil și frumos cu serviciile noastre.'}
                    </span>
                <div className="social-list">
                    <Link to="https://www.facebook.com/profile.php?id=61550733822513" className="social-list__item">
                        <img src={facebook} alt=""/>
                    </Link>

                    <Link to="/" className="social-list__item">
                        <img src={instagram} alt=""/>
                    </Link>

                    <Link to="https://wa.me/message/7G56VWMNEFKZL1" className="social-list__item">
                        <img src={watsApp} alt=""/>
                    </Link>

                    <Link to="#" className="social-list__item">
                        <img src={youtube} alt=""/>
                    </Link>
                </div>
            </div>

            <div className="footer__column footer__column--4">
                <span>Kontaktieren Sie uns:</span>
                <div className="footer__location">
                    <img src={locationSvg} alt=""/>
                    <span>Rotteroder Str.10A 98587 Steinbach Hallenberg</span>
                </div>

                <div className="footer__input">
                    <label htmlFor="">
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"/>
                    </label>
                    <button className="button" onClick={sendMail}>{lang === 'DE' ? 'Anrufe' : lang === 'EN' ? 'Calls' : lang === 'RU' ? 'Звонок' : 'Apel'}</button>
                </div>

            </div>

        </div>

    </div>
}