import React from "react";
import bg from './image.png'
import icon1 from './icon-1.svg'
import icon2 from './icon-2.svg'
import icon3 from './icon-3.svg'

export default function ServicesPreview({lang}) {

    const title = lang === 'DE' ? 'Unsere <b>Dienstleistungen</b>' : lang === 'EN' ? 'Our <b>Services</b>' : lang === 'RU' ? 'Наши <b>сервисы</b>' : 'Serviciile <b>noastre</b>'

    return <div className="preview-block preview-block--services container">

        <div className="preview-block__column preview-block__column--1">
            <h1 dangerouslySetInnerHTML={{__html: title}} />
            <p>{lang === 'DE' ? 'Wir sind bereit, Ihnen bei der Gestaltung eines idealen Raums zu helfen, der Ihren Stil und Ihre Bedürfnisse widerspiegelt.'
                : lang === 'EN' ? 'We are ready to help you design an ideal space that reflects your style and needs.'
                    : lang === 'RU' ? 'Мы готовы помочь вам создать идеальное пространство, которое будет отражать ваш стиль и потребности.'
                        : 'Suntem aici pentru a vă ajuta să creați spațiul perfect care reflectă stilul și nevoile dvs.'}</p>

            <div className="preview-block__icons">
                <div className="preview-block__icon">
                    <div className="preview-block__icon-wrapper">
                        <img src={icon1} alt=""/>
                    </div>
                    <span>{lang === 'DE' ? 'Dank unserer großen Mitarbeiteranzahl reagieren wir schnell auf Anfragen' : lang === 'EN' ? 'Thanks to our large number of employees, we react quickly to inquiries' : lang === 'RU' ? 'Благодаря большому количеству сотрудников мы оперативно реагируем на запросы.' : 'Datorită numărului mare de angajați, răspundem rapid solicitărilor.'}</span>
                </div>
                <div className="preview-block__icon">
                    <div className="preview-block__icon-wrapper">
                    <img src={icon2} alt=""/>
                    </div>
                    <span>{lang === 'DE' ? 'Unsere Mitarbeiter verfügen über ein breites Spektrum an Fähigkeiten' : lang === 'EN' ? 'Our employees have a wide range of skills' : lang === 'RU' ? 'Наши сотрудники обладают широким спектром навыков' : 'Angajații noștri au o gamă largă de abilități'}</span>
                </div>
                <div className="preview-block__icon">
                    <div className="preview-block__icon-wrapper">
                    <img src={icon3} alt=""/>
                    </div>
                    <span>{lang === 'DE' ? 'Für alle unsere Leistungen gilt eine Garantie.' : lang === 'EN' ? 'All of our services come with a guarantee.' : lang === 'RU' ? 'На все наши услуги предоставляется гарантия.' : 'Toate serviciile noastre vin cu garantie.'}</span>
                </div>
            </div>

            <img className="preview-block__mobile-image"  src={bg} alt=""/>

        </div>

        <div className="preview-block__column preview-block__column--2">
            <img src={bg} alt=""/>
        </div>

    </div>
}