import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import imageNavBar from '../images/NavBar.jpg';
import Coder from '../images/Coder.jpg';
import MesCreations from '../images/Mes Créations.jpg';
import '../styles/Blog.css';

const CoderSonSite = () => {
    return (
        <div>
            <Helmet>
                <title>Blog - Articles sur le Développement Web</title>
                <meta name="description" content="Retrouvez ici quelques articles sur le développement web, incluant des conseils sur le HTML/CSS, le référencement, et plus encore." />
                <meta name="keywords" content="blog, développement web, HTML, CSS, PHP, MySQL, WordPress, référencement, responsive design" />
            </Helmet>
            <img src={imageNavBar} alt="Blue" className="img-fluid w-100" />
            <h1 className="h1-center"><strong>BLOG</strong></h1>
            <p className="text-center">Retrouvez ici quelques articles sur le développement web.</p>
            <hr className="custom-hr-p" />
            <aside>
                <div className="container">
                    <div className="row row-blog">
                        <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center mb-4">
                            <div className="card text-center">
                                <img src={Coder} alt="Coder" className="img-fluid card-img-top" />
                                <div className="card-item">
                                    <div className="card-margin">
                                        <h2 className="align-start-h2">Coder son site en HTML/CSS</h2>
                                        <p className="align-start-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" className="btn btn-primary d-flex flex-row">Lire la suite</button>
                                    </div>
                                    <hr className="gray-color" />
                                    <div className="border-blog">
                                        <p className="margin-p10">Publié le 22 août 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center mb-4">
                            <div className="card text-center">
                                <img src={MesCreations} alt="Créations" className="img-fluid card-img-top" />
                                <div className="card-item">
                                    <div className="card-margin">
                                        <h2 className="align-start-h2">Principal du responsive design</h2>
                                        <p className="align-start-p">Le responsive design est une approche essentielle dans la conception de sites web.</p>
                                        <Link to="/blog">
                                            <button type="button" className="btn btn-primary d-flex flex-row">Voir mon blog</button>
                                        </Link>
                                    </div>
                                </div>
                                <hr className="gray-color" />
                                <div className="border-blog">
                                    <Link to="/contact">
                                        <p className="blinking-text"><FontAwesomeIcon icon={faAddressCard} beat style={{ color: "#0d6efd", }} /> {' '}<strong className="custom-color">Contacter-moi</strong></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside >
        </div >
    );
};

export default CoderSonSite;

