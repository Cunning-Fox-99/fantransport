import React from 'react'
import './slider.scss'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css/pagination';

export default function Slider({lang}) {



    return <div className="slider">

        <div className="slider__wrapper">
            <div className="slider__text-wrapper">
                <h4 className="title">
                    {lang === 'DE' ? ' 24/7 arbeiten' : lang === 'EN' ? 'Working 24/7' : lang === 'RU' ? 'Работаем 24/7' : 'Lucrăm 24/7'}
                   </h4>
                <span>
                    {lang === 'DE' ? 'Sie können die auf der Website aufgeführten Telefonnummern anrufen, eine Nachricht senden und wir werden schnell antworten.'
                        : lang === 'EN' ? 'You can call the phone numbers listed on the website, send a message and we will respond quickly.'
                            : lang === 'RU' ? 'Вы можете позвонить по телефонам, указанным на сайте, отправить сообщение и мы оперативно ответим.'
                                : 'Puteți suna la numerele de telefon afișate pe site, trimiteți un mesaj și vă vom răspunde cu promptitudine.'}

                </span>
            </div>

            {/*<div className="slider__toggle">*/}
            {/*    <div className={active === 1 ? "slider__toggle-button active" : "slider__toggle-button"} onClick={() => setActive(1)}></div>*/}
            {/*    <div className={active === 2 ? "slider__toggle-button active" : "slider__toggle-button"} onClick={() => setActive(2)}></div>*/}
            {/*    <div className={active === 3 ? "slider__toggle-button active" : "slider__toggle-button"} onClick={() => setActive(3)}></div>*/}
            {/*</div>*/}
        </div>

        <div className="slider__slides">
        <Swiper pagination={{
            clickable: true,
        }} modules={[Pagination, Navigation]}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="mySwiper mySlider2">
        <SwiperSlide className={ "slider__image"} />
        <SwiperSlide className={ "slider__image slider__image--2"} />
        <SwiperSlide className={"slider__image slider__image--3"} />

    </Swiper>
        </div>

    </div>
}