import React from "react";
import image from './image.png'
import './block-2.scss'
import {Link} from "react-router-dom";

export default function Block2({lang}) {


    const title = lang === 'DE' ? 'Vertrauen Sie den <b>Profis</b>' : lang === 'EN' ? 'Furniture <b>assembly service</b>' : lang === 'RU' ? 'Услуга <b>сборки мебели</b>' : 'Serviciu <b>montaj mobila</b>'

    return <div className="block-2">

        <div className="block-2__wrapper container">

            <div className="block-2__column block-2__column--1">
                <h3 dangerouslySetInnerHTML={{__html: title}}/>
                <span>{lang === 'DE' ? 'Umzüge sind wichtige Entscheidungen, die einen individuellen Ansatz erfordern. Ein Umzug beginnt mit der Planung - wir beraten Sie gerne über die Möglichkeiten Ihres Umzugs.'
                    : lang === 'EN' ? 'Relocations are important decisions that require an individual approach. A move begins with the planning - we will be happy to advise you on the possibilities of your move.'
                        : lang === 'RU' ? 'Переезды – важные решения, требующие индивидуального подхода. Переезд начинается с планирования – мы будем рады проконсультировать вас о возможностях вашего переезда.'
                            : 'Mutarile sunt decizii importante care necesita o abordare individuala. Mutarea începe cu planificarea - vom fi bucuroși să vă sfătuim cu privire la posibilitățile de mutare.'}</span>
                <Link to={'/contact'} className="button">{lang === 'DE' ? 'Anrufe' : lang === 'EN' ? 'Calls' : lang === 'RU' ? 'Звонок' : 'Apel'}</Link>
            </div>

            <div className="block-2__column block-2__column--2">
                <img src={image} alt=""/>
            </div>
        </div>

    </div>
}