// index.tsx
import React from 'react';
import {createRoot} from "react-dom/client";
import App from './App';
import './i18n/i18n.ts';
import './styles/globals.css';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot aufrufen und das root-Element übergeben

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
