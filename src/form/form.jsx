import React, {useState} from "react";
import './form.scss'

export default function Form({lang}) {

    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const sendMail = (e) => {
        e.preventDefault()
        const config = {
            // SecureToken: "409d7303-edc1-448c-955f-8d6d4740fd82",
            To: "fanmoebeltransport@gmail.com",
            From: "fox.dolor.96@gmail.com",
            Subject: `Message from ${email}`,
            Body: `${text}. From ${email}`
        }
        window.Email.send(config).then(r => {
            console.log(r)
            setEmail('Send')
            setTimeout(() => {
                setEmail('')
            }, 2000)
        })
    };

    return <div className="form">

        <h2>In kontakt <br/>kommen</h2>

        <div className="form__wrapper">

            <label htmlFor="" className="form__input">
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email adress"/>
            </label>

            <label htmlFor="" className="form__input">
                <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Ihre Nachricht"/>
            </label>

            <button className="form__button button" onClick={sendMail}>{lang === 'DE' ? 'Anrufe' : lang === 'EN' ? 'Calls' : lang === 'RU' ? 'Звонок' : 'Apel'}</button>

        </div>

    </div>
}