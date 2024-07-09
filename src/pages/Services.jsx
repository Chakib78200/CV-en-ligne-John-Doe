import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faFileCode, faMagnifyingGlassDollar } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import imageNavBar from '../images/NavBar.jpg';
import '../styles/Services.css';


const Services = () => {
    return (
        <div>
            <Helmet>
                <title>Services - John Doe</title>
                <meta name="description" content="Découvrez les services offerts par John Doe, un développeur web expérimenté. Services incluant UX Design, développement web et référencement SEO." />
                <meta name="keywords" content="services, UX Design, développement web, référencement, SEO, John Doe" />
            </Helmet>
            <img src={imageNavBar} alt="Blue" className="img-fluid w-100" />
            <section>
                <div className="container-service row justify-content-center">
                    <h1 className="text-center"><strong>MON OFFRE DE SERVICES</strong></h1>
                    <p className="text-center-p">
                        <span className="no-underline">Voici les pr</span>
                        <span className="blue-underline">ésentations sur lesquelles je peux</span>
                        <span className="no-underline">{' '}intervenir.</span>
                    </p>
                    <div className="row row-service">
                        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
                            <div className="service">
                                <span><FontAwesomeIcon icon={faDesktop} className="icon-hover" /></span>
                                <h3>UX DESIGN</h3>
                                <p>L'<strong>UX Design</strong> est une méthode de <br />
                                    conception centrée sur l'utilisateurs. Son but <br />
                                    est d'offir une expérience de navigation <br />
                                    optimale à l'internaute.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
                            <div className="service">
                                <span><FontAwesomeIcon icon={faFileCode} className="icon-hover" /></span>
                                <h3>DÉVELOPPEMENT WEB</h3>
                                <p><strong>Le développement de sites web</strong> repose sur <br />
                                    l'utilisation des languages{' '}<span className="underline-dotted">HTML,</span> {' '}<span className="underline-dotted">CSS,</span><br />
                                    JavaScript et {' '}<span className="underline-dotted">PHP.</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
                            <div className="service">
                                <span><FontAwesomeIcon icon={faMagnifyingGlassDollar} className="icon-hover" /></span>
                                <h3>RÉFÉRENCEMENT</h3>
                                <p>Le <strong>référencement naturel d'un site</strong>, aussi<br />appelé,{' '}
                                    <span className="underline-dotted">SEO</span> {' '} consiste à mettre des<br />
                                    techniques en oeuvre pour <i>améliorer sa<br />
                                        position</i> dans les résultats des moteurs de<br />
                                    recherche.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;