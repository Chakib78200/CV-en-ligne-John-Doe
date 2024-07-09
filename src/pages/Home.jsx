import React, { useState, useRef } from 'react';
import About from './About';
import { Helmet } from 'react-helmet';
import profileImage from '../images/Profil Compétences.jpg';
import '../styles/Home.css';

const Home = () => {
    const [showAbout, setShowAbout] = useState(false);
    const contentRef = useRef(null);

    const handleShowAbout = () => {
        setShowAbout(true);
        setTimeout(() => {
            if (contentRef.current) {
                console.log("contentRef.current.offsetTop:", contentRef.current.offsetTop);
                window.scrollTo({
                    top: contentRef.current.offsetTop - -470,
                    behavior: 'smooth'
                });
            }
        }, 0);
    };

    return (

        <div className="home">
            <Helmet>
                <title>Accueil - John Doe Développeur Web full Stack</title>
                <meta name="description" content="Bonjour, je suis John Doe, un développeur web full stack. Découvrez plus sur mes compétences et expériences." />
                <meta name="keywords" content="John Doe, développeur web, full stack, compétences, expérience" />
            </Helmet>
            <div className="background-container">
                <img src={profileImage} alt="Compétences" className="background-image" />
                <div className="overlay"></div>
                <div className="home-content" ref={contentRef}>
                    <div className="center-content">
                        <h1>Bonjour, je suis John Doe</h1>
                        <h2 className='font-size'>Développeur web Full stack</h2>
                        <button onClick={handleShowAbout} className="btn btn-primary">En savoir plus</button>
                    </div>
                </div>
            </div>
            {showAbout && <About />}
        </div>
    );
};

export default Home;
