import React from "react";
import ServicesPreview from "../components/services-preview/services-preview";
import ServicesForm from "../components/services-form/services-form";
import ServicesCards from "../components/services-cards/services-cards";
import b1Image1 from '../images/b1-1.png'
import b1Image2 from '../images/b1-2.png'
import b1Image3 from '../images/b1-3.png'
import b1Image4 from '../images/b1-4.png'
import ServicesInfo from "../components/services-info/services-info";
import b2Image1 from '../images/b2-1.png'
import b2Image2 from '../images/b2-2.png'
import b2Image3 from '../images/b2-3.png'
import b2Image4 from '../images/b2-4.png'
import Block2 from "../components/block-2/block-2";
import b3Image1 from '../images/b3-1.png'
import b3Image2 from '../images/b3-2.png'
import b3Image3 from '../images/b3-3.png'
import b3Image4 from '../images/b3-4.png'
import Block3 from "../components/block-3/block-3";
import b4Image1 from '../images/b4-1.png'
import b4Image2 from '../images/b4-2.png'
import b4Image3 from '../images/b4-3.png'
import b4Image4 from '../images/b4-4.png'


export default function Services({lang}) {

    const b1Arr = [
        {img: b1Image1,
            title: lang === 'DE' ? 'Umzug im ganzen Land' : lang === 'EN' ? 'Moving across the country' : lang === 'RU' ? 'Переезд по стране' : 'Mișcarea prin țară',
            text: lang === 'DE' ? 'Kompletter Umzugsservice im ganzen Land: Wir bieten einen umfassenden Umzugsservice für Kunden, die in andere Städte oder Regionen Deutschlands umziehen'
                : lang === 'EN' ? 'Complete relocation service throughout the country: We offer a comprehensive relocation service for customers who are moving to other cities or regions in Germany'
                    : lang === 'RU' ? 'Комплексные услуги по переезду по всей стране: Мы предлагаем комплексные услуги по переезду для клиентов, которые переезжают в другие города или регионы Германии.'
                        : 'Servicii complete de mutare la nivel național: Oferim servicii complete de mutare pentru clienții care se mută în alte orașe sau regiuni din Germania.' },
        {img: b1Image2, title: lang === 'DE' ? 'Lade- und Entladearbeiten' : lang === 'EN' ? 'Loading and unloading work' : lang === 'RU' ? 'Погрузочно-разгрузочные работы' : 'Lucrari de incarcare si descarcare',
            text: lang === 'DE' ? 'Wir bieten sichere Lade- und Entladearbeiten sowie den Transport von schweren und sperrigen Gütern wie Industrieanlagen oder Klavieren an'
                : lang === 'EN' ? 'We offer safe loading and unloading work as well as the transport of heavy and bulky goods such as industrial plants or pianos'
                    : lang === 'RU' ? 'Мы предлагаем безопасные погрузочно-разгрузочные работы, а также транспортировку тяжелых и объемных грузов, таких как промышленные предприятия или пианино.'
                        : 'Oferim manipulare sigură a materialelor, precum și transportul de mărfuri grele și voluminoase, cum ar fi instalații industriale sau piane.' },
        {img: b1Image3, title: lang === 'DE' ? 'Reinigung nach dem Umzug' : lang === 'EN' ? 'Cleaning after moving' : lang === 'RU' ? 'Уборка после переезда' : 'Curățare după mutare',
            text: lang === 'DE' ? 'Wir bieten Reinigungsoptionen an, um sicherzustellen, dass Ihr alter Wohnort nach dem Umzug in einwandfreiem Zustand bleibt'
                : lang === 'EN' ? 'We offer cleaning options to ensure your old home stays in pristine condition after the move'
                    : lang === 'RU' ? 'Мы предлагаем варианты уборки, чтобы ваш старый дом оставался в первозданном состоянии после переезда.'
                        : 'Oferim opțiuni de curățenie pentru a vă menține casa veche în stare impecabilă după ce vă mutați.'},
        {img: b1Image4, title: lang === 'DE' ? 'Parkgenehmigungen' : lang === 'EN' ? 'Parking permits' : lang === 'RU' ? 'Разрешения на парковку' : 'Permise de parcare',
            text: lang === 'DE' ? 'Wir unterstützen unsere Kunden bei der Beantragung temporärer Parkgenehmigungen für bewegliche Lkw in Gebieten mit eingeschränkter Parkmöglichkeit.'
                : lang === 'EN' ? 'We support our customers in applying for temporary parking permits for moving trucks in restricted parking areas.'
                    : lang === 'RU' ? 'Мы поддерживаем наших клиентов при подаче заявления на получение временного разрешения на парковку для перемещения грузовых автомобилей в зонах с ограниченным доступом.'
                        : 'Ne ajutăm clienții să solicite un permis de parcare temporară pentru a muta camioanele în zonele restricționate.'}
    ]

    const b2Arr = [
        {img: b2Image1, title: lang === 'DE' ? 'Büromöbel' : lang === 'EN' ? 'Office furniture' : lang === 'RU' ? 'Офисная мебель' : 'Mobila de birou',
            text: lang === 'DE' ? 'Stühle, Schreibtische, Tische, Schränke usw. für Büros und Gewerberäume'
                : lang === 'EN' ? 'Chairs, desks, tables, cupboards, etc. for offices and commercial premises'
                    : lang === 'RU' ? 'Стулья, столы, столы, шкафы и т.д. для офисов и торговых помещений.'
                        : 'Scaune, mese, birouri, dulapuri etc. pentru birouri si spatii comerciale.'},
        {img: b2Image2, title: lang === 'DE' ? 'Hausmöbel' : lang === 'EN' ? 'Home furniture' : lang === 'RU' ? 'Мебель для дома' : 'Mobila pentru casa',
            text: lang === 'DE' ? 'Stühle, Schreibtische, Tische, Schränke usw. für Büros und Gewerberäume'
                : lang === 'EN' ? 'Chairs, desks, tables, cupboards, etc. for offices and commercial premises'
                    : lang === 'RU' ? 'Стулья, столы, столы, шкафы и т.д. для офисов и торговых помещений.'
                        : 'Scaune, mese, birouri, dulapuri etc. pentru birouri si spatii comerciale.'},
        {img: b2Image3, title: lang === 'DE' ? 'Möbel für verschiedene Zwecke' : lang === 'EN' ? 'Furniture for different purposes' : lang === 'RU' ? 'Мебель разного назначения' : 'Mobilier pentru diverse scopuri',
            text: lang === 'DE' ? 'Sporthallen, Konzerte, Ruheräume, Krankenwagen, Schulen ...' : lang === 'EN' ? 'Sports halls, concerts, rest rooms, ambulances, schools ...' : lang === 'RU' ? 'Спортивные залы, концерты, комнаты отдыха, машины скорой помощи, школы...' : 'Săli de sport, concerte, saloane, ambulanțe, școli...'},
        {img: b2Image4, title: lang === 'DE' ? 'Umzug & Lagerung' : lang === 'EN' ? 'Moving & Storage' : lang === 'RU' ? 'Переезд и хранение' : 'Mutare si depozitare',
            text: lang === 'DE' ? 'Wertvolle und zerbrechliche Güter, sorgfältige Lagerung' : lang === 'EN' ? 'Valuable and fragile goods, careful storage' : lang === 'RU' ? 'Ценные и хрупкие товары, бережное хранение.' : 'Bunuri valoroase și fragile, depozitare atentă.'}
    ]

    const b3Arr = [
        {img: b3Image1, title: lang === 'DE' ? 'Umzug im ganzen Land' : lang === 'EN' ? 'Moving across the country' : lang === 'RU' ? 'Переезд по стране' : 'Mișcarea prin țară',
            text: lang === 'DE' ? 'Kompletter Umzugsservice im ganzen Land: Wir bieten einen umfassenden Umzugsservice für Kunden, die in andere Städte oder Regionen Deutschlands umziehen'
                : lang === 'EN' ? 'Complete relocation service throughout the country: We offer a comprehensive relocation service for customers who are moving to other cities or regions in Germany'
                    : lang === 'RU' ? 'Комплексные услуги по переезду по всей стране: Мы предлагаем комплексные услуги по переезду для клиентов, которые переезжают в другие города или регионы Германии.'
                        : 'Servicii complete de mutare la nivel național: Oferim servicii complete de mutare pentru clienții care se mută în alte orașe sau regiuni din Germania.'},
        {img: b3Image2, title: lang === 'DE' ? 'Lade- und Entladearbeiten' : lang === 'EN' ? 'Loading and unloading work' : lang === 'RU' ? 'Погрузочно-разгрузочные работы' : 'Lucrari de incarcare si descarcare',
            text: lang === 'DE' ? 'Wir bieten sichere Lade- und Entladearbeiten sowie den Transport von schweren und sperrigen Gütern wie Industrieanlagen oder Klavieren an'
                : lang === 'EN' ? 'We offer safe loading and unloading work as well as the transport of heavy and bulky goods such as industrial plants or pianos'
                    : lang === 'RU' ? 'Мы предлагаем безопасные погрузочно-разгрузочные работы, а также транспортировку тяжелых и объемных грузов, таких как промышленные предприятия или пианино.'
                        : 'Oferim manipulare sigură a materialelor, precum și transportul de mărfuri grele și voluminoase, cum ar fi instalații industriale sau piane.'},
        {img: b3Image3, title: lang === 'DE' ? 'Reinigung nach dem Umzug' : lang === 'EN' ? 'Cleaning after moving' : lang === 'RU' ? 'Уборка после переезда' : 'Curățare după mutare',
            text: lang === 'DE' ? 'Wir bieten Reinigungsoptionen an, um sicherzustellen, dass Ihr alter Wohnort nach dem Umzug in einwandfreiem Zustand bleibt'
                : lang === 'EN' ? 'We offer cleaning options to ensure your old home stays in pristine condition after the move'
                    : lang === 'RU' ? 'Мы предлагаем варианты уборки, чтобы ваш старый дом оставался в первозданном состоянии после переезда.'
                        : 'Oferim opțiuni de curățenie pentru a vă menține casa veche în stare impecabilă după ce vă mutați.'},
        {img: b3Image4, title: lang === 'DE' ? 'Parkgenehmigungen' : lang === 'EN' ? 'Parking permits' : lang === 'RU' ? 'Разрешения на парковку' : 'Permise de parcare',
            text: lang === 'DE' ? 'Wir unterstützen unsere Kunden bei der Beantragung temporärer Parkgenehmigungen für bewegliche Lkw in Gebieten mit eingeschränkter Parkmöglichkeit.'
                : lang === 'EN' ? 'We support our customers in applying for temporary parking permits for moving trucks in restricted parking areas.'
                    : lang === 'RU' ? 'Мы поддерживаем наших клиентов при подаче заявления на получение временного разрешения на парковку для перемещения грузовых автомобилей в зонах с ограниченным доступом.'
                        : 'Ne sprijinim clienții în aplicarea unui permis de parcare temporar pentru a muta camioanele în zone cu restricții.'}
    ]

    const b4Arr = [
        {img: b4Image1, title: lang === 'DE' ? 'Reparatur und technische Wartung' : lang === 'EN' ? 'Repair and technical maintenance' : lang === 'RU' ? 'Ремонт и техническое обслуживание' : 'Reparatii si intretinere',
            text: lang === 'DE' ? 'Kleine Reparaturen in Gebäuden, wie der Austausch von Glühbirnen, die Reparatur von Wasserhähnen, der Wechsel von Scharnieren und vieles mehr' : lang === 'EN' ? 'Small repairs in buildings, like replacing light bulbs, repairing faucets, changing hinges and much more' : lang === 'RU' ? 'Мелкий ремонт в зданиях, например, замена лампочек, ремонт смесителей, замена петель и многое другое.' : 'Reparații minore în clădiri, cum ar fi schimbarea becurilor, repararea robinetelor, înlocuirea balamalelor și multe altele.'},
        {img: b4Image2, title: lang === 'DE' ? 'Grünflächenmanagement' : lang === 'EN' ? 'Green space management' : lang === 'RU' ? 'Управление зеленым пространством' : 'Managementul spațiilor verzi',
            text: lang === 'DE' ? 'Wir kümmern uns um die Pflege und Instandhaltung der Grünanlagen rund um Gebäude, einschließlich Rasenschnitt, Blumenpflanzung und Baumpflege.'
                : lang === 'EN' ? 'We take care of the care and maintenance of the green space around buildings, including lawn cutting, flower planting and tree care.'
                    : lang === 'RU' ? 'Мы берем на себя уход и содержание зеленых насаждений вокруг зданий, включая стрижку газонов, посадку цветов и уход за деревьями.'
                        : 'Ne ocupăm de îngrijirea și întreținerea spațiilor verzi din jurul clădirilor, inclusiv tunsul gazonului, plantarea florilor și îngrijirea copacilor.'},
        {img: b4Image3, title: lang === 'DE' ? 'Lüftungs- und Klimaanlagensystemen' : lang === 'EN' ? 'Ventilation and air conditioning systems' : lang === 'RU' ? 'Системы вентиляции и кондиционирования' : 'Sisteme de ventilație și aer condiționat',
            text: lang === 'DE' ? 'Wir bieten Wartung und Reinigung von Lüftungs- und Klimaanlagensystemen an, um eine gesunde.'
                : lang === 'EN' ? 'We offer maintenance and cleaning of ventilation and air conditioning systems to ensure a healthy.'
                    : lang === 'RU' ? 'Мы предлагаем обслуживание и чистку систем вентиляции и кондиционирования для обеспечения здоровья.'
                        : 'Oferim întreținere și curățare a sistemelor de ventilație și aer condiționat pentru a asigura sănătatea.'},
        {img: b4Image4, title: lang === 'DE' ? 'Erweiterte Reparatur- und Wartungsdienste.' : lang === 'EN' ? 'Advanced repair and maintenance services.' : lang === 'RU' ? 'Расширенные услуги по ремонту и техническому обслуживанию.' : 'Servicii avansate de reparații și întreținere.',
            text: lang === 'DE' ? 'Wir bieten komplexere Reparatur- und Wartungsdienste an, die spezielle Fähigkeiten und Kenntnisse erfordern.'
                : lang === 'EN' ? 'We offer more complex repair and maintenance services that require specialized skills and knowledge.'
                    : lang === 'RU' ? 'Мы предлагаем более сложные услуги по ремонту и техническому обслуживанию, требующие специальных навыков и знаний.'
                        : 'Oferim servicii de reparații și întreținere mai complexe care necesită abilități și cunoștințe de specialitate.'}
    ]

    return <>
        <ServicesPreview lang={lang}/>
        <ServicesForm lang={lang}/>
        <ServicesCards title={lang === 'DE' ? 'Kleine' : lang === 'EN' ? 'Small' : lang === 'RU' ? 'Малый' : 'Mic'}
                       lang={lang}
                       title2={lang === 'DE' ? 'transport' : lang === 'EN' ? 'transport' : lang === 'RU' ? 'транспорт' : 'de Transport'}
                       subtitle={lang === 'DE' ? 'Wir bieten eine breite Palette von Dienstleistungen an: von der Verpackung und Kennzeichnung Ihrer Gegenstände bis hin zur sorgfältigen Beladung, dem Transport und der Entladung am neuen Ort' : lang === 'EN' ? 'We offer a wide range of services: from packing and labeling your items to careful loading, transport and unloading at the new location' : lang === 'RU' ? 'Мы предлагаем широкий спектр услуг: от упаковки и маркировки Ваших вещей до бережной погрузки, транспортировки и разгрузки на новом месте.' : 'Oferim o gamă largă de servicii: de la ambalarea și etichetarea articolelor dumneavoastră până la încărcare, transport și descărcare atentă în noua locație'}
                       cards={b1Arr}/>
        <ServicesInfo lang={lang}/>
        <ServicesCards title={lang === 'DE' ? 'Montageservice' : lang === 'EN' ? 'Furniture ' : lang === 'RU' ? 'Услуга' : 'Serviciu montaj'}
                       lang={lang}
                       title2={lang === 'DE' ? 'Möbel' : lang === 'EN' ? 'assembly service' : lang === 'RU' ? 'сборки мебели' : 'mobila'}
                       subtitle={lang === 'DE' ? 'Wir bieten umfassende Dienstleistungen für die Lieferung und Montage von Wohnmöbeln wie Schlafzimmer, Wohnzimmer, Küchen usw. an' : lang === 'EN' ? 'We provide comprehensive services for the delivery and assembly of home furniture such as bedrooms, living rooms, kitchens, etc' : lang === 'RU' ? 'Мы предоставляем комплексные услуги по доставке и сборке домашней мебели, такой как спальни, гостиные, кухни и т. д.' : 'Oferim servicii complete pentru livrarea și asamblarea mobilierului de casă precum dormitoare, sufragerie, bucătării etc'}
                       cards={b2Arr}/>
        <Block2 lang={lang}/>
        <ServicesCards title={lang === 'DE' ? 'Umzug' : lang === 'EN' ? 'Relocation' : lang === 'RU' ? 'Переезд' : 'Relocare'}
                       lang={lang}
                       subtitle={lang === 'DE' ? 'Wir bieten eine breite Palette von Dienstleistungen an: von der Verpackung und Kennzeichnung Ihrer Gegenstände bis hin zur sorgfältigen Beladung, dem Transport und der Entladung am neuen Ort' : lang === 'EN' ? 'We offer a wide range of services: from packing and labeling your items to careful loading, transport and unloading at the new location' : lang === 'RU' ? 'Мы предлагаем широкий спектр услуг: от упаковки и маркировки Ваших вещей до бережной погрузки, транспортировки и разгрузки на новом месте.' : 'Oferim o gamă largă de servicii: de la ambalarea și etichetarea articolelor dumneavoastră până la încărcare, transport și descărcare atentă în noua locație'}
                       cards={b3Arr}/>
        <Block3 lang={lang}/>
        <ServicesCards title={lang === 'DE' ? 'Hausmeister' : lang === 'EN' ? 'Caretaker' : lang === 'RU' ? 'Услуги' : 'Serviciu'}
                       lang={lang}
                       modifier={'small-title'}
                       title2={lang === 'DE' ? 'service' : lang === 'EN' ? 'service' : lang === 'RU' ? 'по дому' : 'de îngrijitor'}
                       subtitle={lang === 'DE' ? 'Wir bieten umfassende Dienstleistungen für die Lieferung und Montage von Wohnmöbeln wie Schlafzimmer, Wohnzimmer, Küchen usw. an' : lang === 'EN' ? 'We provide comprehensive services for the delivery and assembly of home furniture such as bedrooms, living rooms, kitchens, etc' : lang === 'RU' ? 'Мы предоставляем комплексные услуги по доставке и сборке домашней мебели, такой как спальни, гостиные, кухни и т. д.' : 'Oferim servicii complete pentru livrarea și asamblarea mobilierului de casă precum dormitoare, sufragerie, bucătării etc'}
                       cards={b4Arr}/>
    </>
}