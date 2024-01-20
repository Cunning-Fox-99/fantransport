import React from "react";
import man from './man.png'
import image1 from './image.png'
import icon from './icon.svg'
import './services-info.scss'

export default function ServicesInfo({lang}) {

    return <div className="services-info">

        <div className="services-info__wrapper container">

            <div className="services-info__column services-info__column--1">
                <img src={image1} alt=""/>
            </div>

            <div className="services-info__column services-info__column--2">

                <div className="services-info__item">
                    <img src={icon} alt=""/>
                    <span>{lang === 'DE' ? 'Seit 10 Jahren helfen wir Ihnen bei der Lösung Ihrer Aufgaben' : lang === 'EN' ? 'We have been helping you to solve your tasks for 10 years' : lang === 'RU' ? 'Мы помогаем Вам решать Ваши задачи уже 10 лет' : 'De 10 ani te ajutăm să-ți rezolvi problemele'}</span>
                </div>

                <div className="services-info__item">
                    <img src={icon} alt=""/>
                    <span>{lang === 'DE' ? 'Wir garantieren eine erfolgreiche Montage selbst von spezifischer Möbel.' : lang === 'EN' ? 'We guarantee a successful assembly even of specific furniture.' : lang === 'RU' ? 'Мы гарантируем успешную сборку даже специфической мебели.' : 'Garantam montajul cu succes chiar si a mobilierului specific.'}</span>
                </div>

                <div className="services-info__item">
                    <img src={icon} alt=""/>
                    <span>{lang === 'DE' ? 'Wir schätzen Sie und kümmern uns um Ihr Wohlbefinden.' : lang === 'EN' ? 'We value you and care about your well-being.' : lang === 'RU' ? 'Мы ценим ваше время и заботимся о вашем комфорте.' : 'Vă prețuim și ne pasă de bunăstarea dumneavoastră.'}</span>
                </div>

            </div>

            <div className="services-info__column services-info__column--3">
                <img src={man} alt=""/>
            </div>

        </div>

    </div>
}