import React from "react";
import PreviewBlock from "../components/preview-block/preview-block";
import Services from "../components/services/services";
import InfoBlock from "../components/info-block/info-block";
import Slider from "../components/slider/slider";
import Team from "../components/team/team";


export default function Home({lang}) {

    return <>

        <PreviewBlock lang={lang} title={lang === 'DE' ? 'Willkommen auf unserer Website'
            : lang === 'EN' ? 'Willkommen auf unserer Website'
                : lang === 'RU' ? 'Добро пожаловать на наш веб-сайт'
                    : 'Bine ati venit pe site-ul nostru'} text={lang === 'DE' ? 'Unsere Firma ist stolz darauf, hochwertige und zuverlässige Dienstleistungen anzubieten, die Ihren Umzug erleichtern und sicherstellen, dass Ihre Wertsachen sorgsam behandelt werden.'
            : lang === 'EN' ? 'Our company prides itself on providing quality and reliable services that will make your move easier and ensure that your valuables are treated with care.'
                : lang === 'RU' ? 'Наша компания гордится тем, что предоставляет качественные и надежные услуги, которые облегчат ваш переезд и обеспечат бережное обращение с вашими ценностями.'
                    : 'Compania noastră este mândră să ofere servicii de înaltă calitate și de încredere care să vă facă mutarea mai ușoară și să se asigure că bunurile dvs. sunt tratate cu grijă.'}  page="main" />
        <Services lang={lang}/>
        <InfoBlock lang={lang}/>
        <Slider lang={lang}/>
        <Team lang={lang}/>

    </>
}