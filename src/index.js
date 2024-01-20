import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ui-kit.scss'

import {HashRouter} from "react-router-dom";

import App from "./app";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>

         <App />

    </HashRouter>
);

