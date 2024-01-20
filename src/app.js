import React, {useEffect, useState} from "react";
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Footer from "./components/footer/footer";

export default function App() {

    const [lang, setLang] = useState('DE')

    useEffect(() => {
        if(localStorage.getItem('lang')) {
            setLang(localStorage.getItem('lang'))
        } else {
            localStorage.setItem('lang', 'DE')
        }
    }, [lang])

    return <>
        <Header lang={lang} setLang={(val) => setLang(val)}/>
        <Routes>
            <Route path="/" element={<Home lang={lang}/>}/>
            <Route path="/about-us" element={<AboutUs lang={lang}/>}/>
            <Route path="/services" element={<Services lang={lang}/>}/>
            <Route path="/contact" element={<Contact lang={lang}/>}/>
        </Routes>

        <Footer lang={lang}/>

    </>
}