import React from "react";
import './services-cards.scss'
import {Link} from "react-router-dom";


export default function ServicesCards({title, title2, subtitle, cards, modifier, lang}) {

    return <div className={modifier ? `services-cards services-cards--${modifier} container` :"services-cards container"}>

        <h1 className="title">{title} <b>{title2}</b></h1>
        <span className="services-cards__subtitle">{subtitle}</span>

        <div className="services-cards__wrapper">

            {cards.map((card, index) => {
                return <div className="services-cards__card" key={index}>
                    <img src={card.img} alt=""/>
                    <div className="services-cards__bottom">
                        <div className="services-cards__text-wrapper">
                            <h3>{card.title}</h3>
                            <span>{card.text}</span>
                        </div>
                        <Link to={'/contact'} className="button">{lang === 'DE' ? 'Siehe' : lang === 'EN' ? 'Please refer' : lang === 'RU' ? 'Cвяжитесь с нами' : 'Contactaţi-ne'}</Link>
                    </div>

                </div>
            })}

        </div>

    </div>
}