import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import '../styles/Footer.css';

const Footer = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer>
            <Helmet>
                <title>John Doe - Développeur Web Full Stack</title>
                <meta name="description" content="Portfolio de John Doe, développeur web full stack. Découvrez ses réalisations, articles, services et informations de contact." />
                <meta name="keywords" content="John Doe, développeur web, portfolio, réalisations, articles, services, contact" />
            </Helmet>
            <div className="footer-content">
                <div className="footer-column">
                    <h3>John Doe</h3>
                    <p className="margin-p">40 Rue Laure Diebold</p>
                    <p className="margin-p">69009 Lyon, France</p>
                    <p className="margin-p">Téléphone : 06 20 30 40 50</p>
                    <div className="social-links">
                        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
                <div className="footer-column padding-lien">
                    <h4>Liens utiles</h4>
                    <ul>
                        <li><span className="blue-arrow">{'>'}</span> <Link to="/">Accueil</Link></li>
                        <li><span className="blue-arrow">{'>'}</span> <Link to="/about">À Propos</Link></li>
                        <li><span className="blue-arrow">{'>'}</span> <Link to="/services">Services</Link></li>
                        <li><span className="blue-arrow">{'>'}</span> <Link to="/contact">Me Contacter</Link></li>
                        <li><span className="blue-arrow">{'>'}</span> <Link to="/legal">Mentions Légales</Link></li>
                    </ul>
                </div>
                <div className="footer-column padding-real">
                    <h4 >Mes dernières réalisations</h4>
                    <ul>
                        <li><span className="blue-arrow">{'>'}</span><Link to="/freshfood">Fresh Food</Link></li>
                        <li><span className="blue-arrow">{'>'}</span><Link to="/restaurantakira">Restaurant Akira</Link></li>
                        <li><span className="blue-arrow">{'>'}</span><Link to="/espacebienetre">Espace bien-être</Link></li>
                    </ul>
                </div>
                <div className="footer-column padding-item">
                    <h4>Mes derniers articles</h4>
                    <ul>
                        <li><span className="blue-arrow">{'>'}</span><Link to="/codersonsite">Coder son site en HTML/CSS</Link></li>
                        <li><span className="blue-arrow">{'>'}</span><Link to="/vendresesproduits">Vendre ses produits sur le web</Link></li>
                        <li><span className="blue-arrow">{'>'}</span><Link to="/positiongoogle">Se positionner sur Google</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; Designed by John Doe</p>
            </div>
            {showBackToTop && (
                <div className="back-to-top-container">
                    <a href="#top" className="back-to-top"><FontAwesomeIcon icon={faCircleUp} beat className="backtotop-hover" /></a>
                </div>
            )}
        </footer>
    );
};

export default Footer;
