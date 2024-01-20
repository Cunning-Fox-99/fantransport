import React from "react";
import image1 from './image-1.png'
import image2 from './image-2.png'
import image3 from './image-3.png'
import image4 from './image-4.png'
import './services.scss'
import {Link} from "react-router-dom";

export default function Services({lang}) {

    return <div className="services container">
        <h2 className="services__title title">{lang === 'DE' ? 'Unser Service' : lang === 'EN' ? 'Our services' : lang === 'RU' ? 'Наши сервисы' : 'Serviciile noastre'}</h2>

        <div className="services__cards-wrapper">

            <div className="services__card">
                <img src={image1} alt=""/>
                <span>
                    {lang === 'DE' ? 'Kleine Transport' : lang === 'EN' ? 'Small transportation' : lang === 'RU' ? 'Малый транспорт' : 'Transport mic'}
                </span>
                <Link to={'/contact'} className="services__card__button button">
                    {lang === 'DE' ? 'siehe' : lang === 'EN' ? 'please refer' : lang === 'RU' ? 'связаться' : 'scrie'}
                </Link>
            </div>

            <div className="services__card">
                <img src={image2} alt=""/>
                <span>
                    {lang === 'DE' ? 'Montageservice Möbel' : lang === 'EN' ? 'Furniture assembly service' : lang === 'RU' ? 'Услуга сборки мебели' : 'Serviciu montaj mobila'}
                </span>
                <Link to={'/contact'} className="services__card__button button">
                    {lang === 'DE' ? 'siehe' : lang === 'EN' ? 'please refer' : lang === 'RU' ? 'связаться' : 'scrie'}
                </Link>
            </div>

            <div className="services__card">
                <img src={image3} alt=""/>
                <span>
                   {lang === 'DE' ? 'Umzug' : lang === 'EN' ? 'Relocation' : lang === 'RU' ? 'Переезд' : 'In miscare'}
                </span>
                <Link to={'/contact'} className="services__card__button button">
                    {lang === 'DE' ? 'siehe' : lang === 'EN' ? 'please refer' : lang === 'RU' ? 'связаться' : 'scrie'}
                </Link>
            </div>

            <div className="services__card">
                <img src={image4} alt=""/>
                <span>
                    {lang === 'DE' ? 'Haus und Handwerksdienste' : lang === 'EN' ? 'Home and craft services' : lang === 'RU' ? 'Услуги по дому и ремонту' : 'Servicii la domiciliu si reparatii'}
                </span>
                <Link to={'/contact'} className="services__card__button button">
                    {lang === 'DE' ? 'siehe' : lang === 'EN' ? 'please refer' : lang === 'RU' ? 'связаться' : 'scrie'}
                </Link>
            </div>

        </div>
    </div>
}