import React from "react";
import image1 from './image-1.png'
import image2 from './image-2.png'
import image3 from './image-3.png'
import image4 from './image-4.png'
import './partners.scss'

export default function Partners() {

    return <div className="partners container">

        <h2 className="title">Unsere <b>Partners</b></h2>

        <div className="partners__wrapper">

            <div className="partners__item">
                <img src={image1} alt=""/>
            </div>
            <div className="partners__item">
                <img src={image2} alt=""/>
            </div>
            <div className="partners__item">
                <img src={image3} alt=""/>
            </div>
            <div className="partners__item">
                <img src={image4} alt=""/>
            </div>

        </div>

    </div>
}