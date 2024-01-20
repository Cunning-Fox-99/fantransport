import React from "react";
import image1 from './image-1.png'
import image2 from './image-2.png'
import image3 from './image-3.png'
import image4 from './image-4.png'
import './team.scss'

export default function Team({lang}) {

    return <div className="team container">

        <h2 className="title">{lang === 'DE' ? 'Unsere Experten' : lang === 'EN' ? 'Our experts' : lang === 'RU' ? 'Наши эксперты' : 'Experții noștri'}</h2>

        <div className="team__cards-wrapper">

            <div className="team__card">
                <img src={image1} alt=""/>
                <div className="team__card-text">
                    <h5>Alexandru</h5>
                    <span>{lang === 'DE' ? 'Küchenmontage' : lang === 'EN' ? 'Furniture assembly' : lang === 'RU' ? 'Сборка мебели' : 'Montaj mobilier'}</span>
                </div>

            </div>

            <div className="team__card">
                <img src={image2} alt=""/>
                <div className="team__card-text">
                    <h5>Michael</h5>
                    <span>{lang === 'DE' ? 'Möbelmontage' : lang === 'EN' ? 'Furniture assembly' : lang === 'RU' ? 'Сборка мебели' : 'Montaj mobilier'}</span>
                </div>
            </div>

            <div className="team__card">
                <img src={image3} alt=""/>
                <div className="team__card-text">
                    <h5>Yuriy</h5>
                    <span>{lang === 'DE' ? 'Logistiker' : lang === 'EN' ? 'Logistician' : lang === 'RU' ? 'Логист' : 'Logistician'}</span>
                </div>
            </div>

            <div className="team__card">
                <img src={image4} alt=""/>
                <div className="team__card-text">
                    <h5>Augustin</h5>
                    <span>{lang === 'DE' ? 'Hausmeister' : lang === 'EN' ? 'Builder' : lang === 'RU' ? 'Строительный мастер' : 'Inspector de constructii'}</span>
                </div>
            </div>

        </div>

    </div>
}