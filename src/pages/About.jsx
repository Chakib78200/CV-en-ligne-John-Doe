import React from 'react';
import ProgressBar from '../components/ProgressBar';
import { Helmet } from 'react-helmet';
import photo from '../images/Photo.jpg';
import '../styles/About.css';

const About = () => {
    return (
        <section className="about-section">
            <Helmet>
                <title>À propos - John Doe</title>
                <meta name="description" content="Découvrez plus sur John Doe, un développeur web full stack passionné basé à Lyon, avec des compétences en HTML, CSS, JavaScript, PHP, et React." />
                <meta name="keywords" content="à propos, développeur web, John Doe, HTML, CSS, JavaScript, PHP, React, Lyon" />
            </Helmet>
            <div className="container py-5">
                <div className="row custom-row">
                    {/* Colonne de gauche */}
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 left-content">
                        <h2 className='padding-about'>À propos</h2>
                        <hr className='custom-hr' />
                        <p className='custom-font-size'>
                            Passionné par l'informatique et les nouvelles <br />technologies, j'ai suivi une formation
                            d'<strong>intégrateur-<br /> développeur web</strong> au CEF.
                            Au cours de cette formation,<br /> j'ai pu acquérir des bases solides pour travailler dans le <br />
                            domaine du <strong>développement web</strong>.
                        </p>
                        <p className='custom-font-size'>
                            Basé sur Lyon, je suis en recherche d'une alternance au <br />
                            sein d'une agence digitale pour consolider ma formation <br />
                            de <strong>développeur web full stack</strong>.
                        </p>
                        <p className='custom-font-size'>
                            J'accorde une attention particulière à la qualité du code <br />que j'écris et je respecte les bonnes
                            pratiques du web.
                        </p>
                    </div>
                    {/* Colonne de droite */}
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 right-content">
                        <img src={photo} alt="John Doe" className="img-fluid mb-1 rounded " />
                        <h2>Mes compétences</h2>
                        <div className="progress-container">
                            <ProgressBar skill="HTML" percentage={90} color="red" />
                            <ProgressBar skill="CSS" percentage={85} color="turquoise" />
                            <ProgressBar skill="JavaScript" percentage={80} color="orange" />
                            <ProgressBar skill="PHP" percentage={75} color="green" />
                            <ProgressBar skill="React" percentage={75} color="blue" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
