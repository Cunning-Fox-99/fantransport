import React, {useEffect, useState} from "react";
import switcher from "../switcher.svg";
import './language-switcher.scss'

export default function LanguageSwitcher({changeLang}) {

    const [active, setActive] = useState(false)
    const [lang, setLang] = useState('DE')

    const langs = ['DE', 'EN', 'RU', 'RO']



    useEffect(() => {
        if (localStorage.getItem('lang')) {
            setLang(localStorage.getItem('lang'))
        }
    }, [])

    return <div className={active ? "language-switcher open" : "language-switcher"}>

        <div className="language-switcher__top" onClick={() => setActive(prevState => !prevState)}>
            <img src={switcher} alt=""/>
            <span>{lang}</span>
        </div>

        <div className="language-switcher__body">
            {langs.map((item, index) => {
                return <div onClick={() => {
                    setLang(item)
                    changeLang(item)
                    localStorage.setItem('lang', item)
                    setActive(false)
                }} key={index} className="language-switcher__item">{item}</div>
            })}
        </div>

    </div>
}