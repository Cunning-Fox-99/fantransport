import React from "react";
import bg from './bg.png'
import './services-form.scss'

export default function ServicesForm({lang}) {

    return <div className="services-form">

        <div className="services-form__wrapper container">

            <div className="services-form__column services-form__column--1">
                <img src={bg} alt=""/>
            </div>
            <div className="services-form__column services-form__column--2">
                <h3>{lang === 'DE' ? 'Wir arbeiten in ganz Deutschland und in den Ländern der Europäischen Union' : lang === 'EN' ? 'We work throughout Germany and in the countries of the European Union' : lang === 'RU' ? 'Работаем по всей Германии и в странах Евросоюза' : 'Lucrăm în toată Germania și în țările UE'}</h3>

                <div className="services-form__form">
                    <span>{lang === 'DE' ? 'Senden Sie uns ein Bewerbungsformular:' : lang === 'EN' ? 'Send application form to our mail:' : lang === 'RU' ? 'Отправьте нам заявку на почту:' : 'Trimiteți-ne un formular de cerere:'}</span>
                    <div className="services-form__input-wrapper">
                        <label htmlFor="" className="services-form__input">
                            <input type="text" placeholder="example@gmail.com"/>
                        </label>
                        <div className="services-form__button button">{lang === 'DE' ? 'Senden' : lang === 'EN' ? 'Send' : lang === 'RU' ? 'Отправить' : 'Trimiteți'}</div>
                    </div>

                </div>
            </div>

        </div>

    </div>
}