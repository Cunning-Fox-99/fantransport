import React from "react";
import PreviewBlock from "../components/preview-block/preview-block";
import SliderUs from "../components/slider-us/slider-us";
// import Partners from "../components/partners/partners";

export default function AboutUs({lang}) {

    return <>
        <PreviewBlock lang={lang} title={lang === 'DE' ? 'Über <b>uns</b>' : lang === 'EN' ? 'About <b>us</b>' : lang === 'RU' ? 'О <b>нас</b>' : 'Despre <b>noi</b>'}
                      text={lang === 'DE' ? 'Wir sind ein spezialisiertes Unternehmen für Möbelmontage und -transport und helfen Ihnen gerne dabei, ein gemütliches und funktionales Ambiente in Ihrem Zuhause oder Büro zu schaffen. Unsere Mission ist es, den Umzugs- und Einrichtungsprozess für Sie so einfach und bequem wie möglich zu gestalten. <br> <br> Unser Team erfahrener Fachleute verfügt über umfangreiche Kenntnisse im Bereich Möbeldesign, Montage und Logistik, was es uns ermöglicht, Ihnen hochwertige Dienstleistungen anzubieten.'
                          : lang === 'EN' ? 'We are a specialist furniture assembly and transport company and are happy to help you create a cozy and functional ambience in your home or office. Our mission is to make the moving and setup process as easy and convenient for you as possible.\n' +
                              '<br> <br>' +
                              'Our team of experienced professionals has extensive knowledge of furniture design, assembly and logistics, which allows us to offer you quality services.'
                              : lang === 'RU' ? 'Мы специализируемся на сборке и транспортировке мебели и будем рады помочь вам создать уютную и функциональную атмосферу в вашем доме или офисе. Наша миссия — сделать процесс переезда и установки максимально простым и удобным для вас.\n' +
                                  '<br><br>' +
                                  'Наша команда опытных профессионалов обладает обширными знаниями в области проектирования, сборки и логистики мебели, что позволяет нам предлагать вам качественные услуги.'
                                  : 'Suntem specializați în montarea și transportul mobilei și suntem bucuroși să vă ajutăm să creați o atmosferă confortabilă și funcțională în casa sau biroul dvs. Misiunea noastră este să facem procesul de mutare și amenajare cât mai simplu și comod pentru dvs.' +
                                  '<br><br>' +
                                  'Echipa noastră de profesioniști experimentați are cunoștințe extinse în domeniul designului de mobilier, montajului și logisticii, ceea ce ne permite să vă oferim servicii de înaltă calitate.'} />
        <SliderUs lang={lang}/>
        {/*<Partners />*/}
    </>
}



