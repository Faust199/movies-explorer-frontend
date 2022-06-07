import './Main.css'
import React, { useRef } from 'react';
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";

function Main() {

    const aboutProjectRef = useRef();
    const techsRef = useRef();
    const aboutMeRef = useRef();

    return (
        <div>
            <Promo aboutProjectRef={aboutProjectRef} techsRef={techsRef} aboutMeRef={aboutMeRef}/>
            <AboutProject aboutProjectRef={aboutProjectRef} />
            <Techs techsRef={techsRef} />
            <AboutMe aboutMeRef={aboutMeRef} />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default Main;