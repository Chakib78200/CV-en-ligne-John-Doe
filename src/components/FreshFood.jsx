import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import imageNavBar from '../images/NavBar.jpg';
import FreshFood from '../images/Fresh Food.jpg';
import MesCreations from '../images/Mes Créations.jpg';
import '../styles/Realisation.css';

const freshFood = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio - Mes Réalisations</title>
                <meta name="description" content="Découvrez quelques-unes de mes réalisations, incluant des sites web pour des restaurants, des services de bien-être et plus." />
                <meta name="keywords" content="portfolio, réalisations, sites web, PHP, MySQL, WordPress, HTML, CSS" />
            </Helmet>
            <img src={imageNavBar} alt="Blue" className="img-fluid w-100" />
            <h1 className="h1-center"><strong>PORTFOLIO</strong></h1>
            <p className="text-center">Voici quelques-unes de mes réalisations.</p>
            <hr className="custom-hr-p" />
            <article>
                <div className="container">
                    <div className="row row-site">
                        <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center mb-4">
                            <div className="card text-center">
                                <img src={FreshFood} alt="Fresh Food" className="img-fluid card-img-top" />
                                <div className="card-item">
                                    <h2 className="margin-h2">Fresh food</h2>
                                    <p>Réalisation d'un site avec commande en <br />ligne.</p>
                                    <button type="button" className="btn btn-outline-primary">Voir</button>
                                    <hr className="color-gray" />
                                    <div className="border-site">
                                        <p>Site réalisé avec PHP et MySQL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center mb-4">
                            <div className="card text-center">
                                <img src={MesCreations} alt="Créations" className="img-fluid card-img-top" />
                                <div className="card-item">
                                    <h2 className="margin-h2">Responsive</h2>
                                    <p>Expérience Utilisateur Améliorée et <br />cohérente.</p>
                                    <Link to="/realisation">
                                        <button type="button" className="btn btn-outline-primary">Voir mes réalisations</button>
                                    </Link>
                                    <hr className="color-gray" />
                                    <div className="border-site">
                                        <Link to="/contact">
                                            <p className="blinking-text"><FontAwesomeIcon icon={faAddressCard} beat style={{ color: "#0d6efd", }} /> {' '}<strong className="custom-color">Contacter-moi</strong></p>
                                        </Link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default freshFood;
