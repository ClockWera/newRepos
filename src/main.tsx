import React from 'react';
import { createRoot } from 'react-dom/client';
import { AboutUs } from './AboutUs';
import { Ads } from './Ads';
import { Body } from './Body';
import { Header } from './Header';
import { Reasons } from './Reasons';
import { Services } from "./Services";
import { Stats } from './Stats';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Reasons />
    <AboutUs />
    <Services />
    <Stats />
    <Ads />
  </React.StrictMode>,
)