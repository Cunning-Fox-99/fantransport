import React from "react";
import './slider-us.scss'
import 'swiper/css/navigation';
import image1 from './slide-1.png'
import image2 from './slide-2.png'
import image3 from './slide-3.png'
import image4 from './slide-4.png'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

export default function SliderUs({lang}) {


    return <div className="slider-us">

        <div className="slider-us__wrapper container">
            <h2 className="title">{lang === 'DE' ? 'Schauen Sie sich unsere Projekte an.' : lang === 'EN' ? 'Check out our projects.' : lang === 'RU' ? 'Ознакомьтесь с нашими проектами.' : 'Consultați proiectele noastre.'}</h2>
            <span>{lang === 'DE' ? 'Wir verstehen, dass jedes Detail wichtig ist, und gehen daher auf jeden Auftrag individuell ein, um Ihre Bedürfnisse und Vorlieben zu berücksichtigen.'
                : lang === 'EN' ? 'We understand that every detail is important, so we approach each job individually to meet your needs and preferences.'
                    : lang === 'RU' ? 'Мы понимаем, что важна каждая деталь, поэтому подходим к каждой работе индивидуально, учитывая ваши потребности и предпочтения.'
                        : 'Înțelegem că fiecare detaliu este important, așa că abordăm fiecare job individual, ținând cont de nevoile și preferințele dumneavoastră.'}
                </span>

            <div className="slider-us__slides">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        860: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper mySwiperUs"
                >
                    <SwiperSlide className="slider-us__slide">
                        <img src={image1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slider-us__slide">
                        <img src={image2} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slider-us__slide">
                        <img src={image3} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slider-us__slide">
                        <img src={image4} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slider-us__slide">
                        <img src={image1} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slider-us__slide">
                        <img src={image2} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slider-us__slide">
                        <img src={image3} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide className="slider-us__slide">
                        <img src={image4} alt=""/>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/*<div className="slider-us__toggle">*/}
            {/*    <div onClick={() => setSlide(1)} className={slide === 1 ? "slider-us__toggle-item active" : "slider-us__toggle-item"}></div>*/}
            {/*    <div onClick={() => setSlide(2)} className={slide === 2 ? "slider-us__toggle-item active" : "slider-us__toggle-item"}></div>*/}
            {/*    <div onClick={() => setSlide(3)} className={slide === 3 ? "slider-us__toggle-item active" : "slider-us__toggle-item"}></div>*/}
            {/*</div>*/}

        </div>

    </div>
}