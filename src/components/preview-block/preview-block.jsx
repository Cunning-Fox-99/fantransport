import React from "react";
import imageMain from './image.png'
import imageUs from './image-us.png'
import './preview-block.scss'
import {Link} from "react-router-dom";


export default function PreviewBlock({page, title, text, lang}) {

    const image = page === 'main' ? imageMain : imageUs

    return <div className="preview-block container">

        <div className="preview-block__column preview-block__column--1">
            <h1 dangerouslySetInnerHTML={{__html: title}} />
            <img src={image} alt=""/>
            <p dangerouslySetInnerHTML={{__html: text}}/>

            <Link to={page === 'main' ? '/about-us' : '/'} className="button">
                {lang === 'DE' ? 'Mehr lesen' : lang === 'EN' ? 'Read more' : lang === 'RU' ? 'Читать далее' : 'Citeşte mai mult'}
            </Link>
        </div>

        <div className="preview-block__column preview-block__column--2">
            <img src={image} alt=""/>
        </div>

    </div>
}