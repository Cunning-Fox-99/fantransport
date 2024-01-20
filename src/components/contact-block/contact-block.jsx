import React from "react";
import imageColumn from './bg.png'
import time from './time.svg'
import mail from './mail.svg'
import telegram from './telegram.svg'
import whatsApp from './whats-app.svg'
import viber from './viber.svg'
import tel from './tel.svg'
import {Link} from "react-router-dom";
import './contact.scss'
import Form from "../../form/form";

export default function ContactBlock({lang}) {

    return <div className="contact container">

        <div className="contact__column contact__column--1">
          <Form lang={lang}/>
        </div>

        <div className="contact__column contact__column--2">

            <div className="contact__item">
                <h5>{lang === 'DE' ? 'Öffnungszeiten:' : lang === 'EN' ? 'Get in touch' : lang === 'RU' ? 'Оставьте заявку' : 'Lasă o cerere'}
                    </h5>
                <div className="contact__item-wrapper">
                    <img src={time} alt=""/>
                    <span>
                        {lang === 'DE' ? 'Ohne Ruhetage' : lang === 'EN' ? 'Without days off' : lang === 'RU' ? 'Рабочие дни' : 'Zile de lucru'}
                        <br/>Mo - Fr 7:00 - 18:00 Uhr <br/>Sam - Sonn 13:00 - 16:00 Uhr</span>
                </div>
            </div>

            <div className="contact__item">
                <h5>Email adresse:</h5>
                <div className="contact__item-wrapper">
                    <img src={mail} alt=""/>
                    <span>fanmoebeltransport@gmail.com</span>
                </div>

                <div className="contact__item-wrapper">
                    <img src={tel} alt=""/>
                    <span>+49 (155) 10096948</span>
                </div>
            </div>

            <div className="contact__item">
                <h5>Unsere messengers:</h5>
                <div className="contact__social">
                    <Link to={'https://t.me/MoebelMontage_Umzug_Hausmeister'} >
                        <img src={telegram} alt=""/>
                    </Link>

                    <Link to={'https://wa.me/message/7G56VWMNEFKZL1'}>
                        <img src={whatsApp} alt=""/>
                    </Link>

                    <Link to={'viber://add?number=491791115192'}>
                        <img src={viber} alt=""/>
                    </Link>

                </div>
            </div>

        </div>

        <div className="contact__column contact__column--3">
            <img src={imageColumn} alt=""/>
        </div>

    </div>
}