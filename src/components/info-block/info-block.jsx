import React from "react";
import image1 from './image-1.svg'
import image2 from './image-2.svg'

import image4 from './image-4.svg'
import arrow from './arrow.svg'
import './info-block.scss'
import * as PropTypes from "prop-types";

function ScrollableAnchor(props) {
    return null;
}

ScrollableAnchor.propTypes = {
    id: PropTypes.string,
    children: PropTypes.node
};
export default function InfoBlock({lang}) {

    return <div className="info-block container" id={'how-it-work'}>

        <h2 className="info-block__title title">
            {lang === 'DE' ? 'Wie es funktioniert' : lang === 'EN' ? 'How it works' : lang === 'RU' ? 'Как это работает' : 'Cum functioneaza'}
        </h2>

        <div className="info-block__wrapper">

            <div className="info-block__item info-block__item--1">
                <img src={image1} alt=""/>
                <span>
                   {lang === 'DE' ? 'Sie fordern einen Rückruf an'
                       : lang === 'EN' ? 'You request a callback'
                           : lang === 'RU' ? 'Вы заказываете звонок'
                               : 'Soliciți un apel'}
                </span>
            </div>

            <div className="info-block__arrow info-block__arrow--1">
                <img src={arrow} alt=""/>
            </div>

            <div className="info-block__item info-block__item--2">
                <img src={image2} alt=""/>
                <span>
                    {lang === 'DE' ? 'Wir rufen Sie zurück und vereinbaren einen Termin'
                        : lang === 'EN' ? 'We will call you back and make an appointment'
                            : lang === 'RU' ? 'Мы перезвоним вам и назначим встречу'
                                : 'Vă vom suna înapoi și vom face o programare'}

                </span>
            </div>

            <div className="info-block__arrow info-block__arrow--3">
                <img src={arrow} alt=""/>
            </div>

            <div className="info-block__item info-block__item--4">
                <img src={image4} alt=""/>
                <span>
                    {lang === 'DE' ? 'Wir erledigen Ihre Bestellung schnell und qualitativ hochwertig'
                        : lang === 'EN' ? 'We will complete your order quickly and with high quality'
                            : lang === 'RU' ? 'Мы выполним ваш заказ быстро и качественно'
                                : 'Vă vom îndeplini comanda rapid și eficient'}

                </span>
            </div>

        </div>

    </div>
}