import React from "react";
import bg from './bg.png'
import './block-3.scss'

export default function Block3({lang}) {

    return <div className="block-3">

        <div className="block-3__wrapper container">

            <div className="block-3__column block-3__column--1">
               <span>
                   {lang === 'DE' ? 'Umzug' : lang === 'EN' ? 'Relocation' : lang === 'RU' ? 'Переезд' : 'Relocare'}
                   </span>
               <span className="yellow">
                   {lang === 'DE' ? 'Möbelmontage' : lang === 'EN' ? 'Furniture assembly' : lang === 'RU' ? 'Установка мебели' : 'Montaj mobilier'}

               </span>
               <span className="red">
                   {lang === 'DE' ? 'Küchenmontage' : lang === 'EN' ? 'Kitchen assembly' : lang === 'RU' ? 'Сборка кухни' : 'Montaj bucatarie'}
               </span>
            </div>

            <div className="block-3__column block-3__column--2">
                <img src={bg} alt=""/>
            </div>

            <div className="block-3__column block-3__column--3">
                <span className="red">
                     {lang === 'DE' ? 'Hausmeister' : lang === 'EN' ? 'House Master' : lang === 'RU' ? 'Мастер по дому' : 'Stăpânul casei'}
                </span>
                <span className="green">
                    {lang === 'DE' ? 'Handwerkservice' : lang === 'EN' ? 'Craft service' : lang === 'RU' ? 'Услуги разнорабочих' : 'Serviciu de artizanat'}
                </span>
                <span>
                    {lang === 'DE' ? 'Gartengestaltung' : lang === 'EN' ? 'Garden design' : lang === 'RU' ? 'Оформление сада' : 'Design de gradina'}
                </span>
            </div>

        </div>

    </div>
}