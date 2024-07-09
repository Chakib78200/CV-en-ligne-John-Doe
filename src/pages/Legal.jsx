import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faGlobe, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Legal.css';

const Legal = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (activeAccordion === index) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(index);
        }
    };

    const isAccordionOpen = (index) => {
        return activeAccordion === index;
    }

    return (
        <section>
            <h1 className="legal-header">
                <span className="no-underline">MEN</span>
                <span className="blue-underline">TIONS LÉGA</span>
                <span className="no-underline">LES</span>
            </h1>
            <div className="accordion" id="legalAccordion1">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h4 className="mb-0">
                            <button className="btn btn-link" type="button" onClick={() => toggleAccordion(1)}
                                aria-expanded={isAccordionOpen(1)}
                                aria-controls="collapseOne">
                                <h4>Éditeur du site
                                    {isAccordionOpen(1) ? (
                                        <span className="margin-span">&#8743;</span>
                                    ) : (
                                        <span className="margin-span">&#8744;</span>
                                    )}
                                </h4>
                            </button>
                        </h4>
                    </div>
                    <div id="collapseOne" className={`collapse ${isAccordionOpen(1) ? 'show' : ''}`} aria-labelledby="headingOne"
                        data-parent="#legalAccordion1" >
                        <div className="card-body">
                            <h2>John Doe</h2>
                            <p><FontAwesomeIcon icon={faLocationDot} />{' '}40 Rue Laure Diebold</p>
                            <p>69009 Lyon, France</p>
                            <p><FontAwesomeIcon icon={faMobileAlt} className="icon" />{' '}<a href="tel:0620304050"
                                style={{ color: '#0d6efd' }}>06 20 30 40 50</a></p>
                            <p><FontAwesomeIcon icon={faEnvelope} className="icon" />{' '}<a href="mailto:john.doe@gmail.com"
                                style={{ color: '#0d6efd' }}>john.doe@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="accordion" id="legalAccordion2">
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <h4 className="mb-0">
                            <button className="btn btn-link" type="button" onClick={() => toggleAccordion(2)}
                                aria-expanded={isAccordionOpen(2)} aria-controls="collapseTwo">
                                <h4>Hébergeur
                                    {isAccordionOpen(2) ? (
                                        <span className="margin-span">&#8743;</span>
                                    ) : (
                                        <span className="margin-span">&#8744;</span>
                                    )}
                                </h4>
                            </button>
                        </h4>
                    </div>
                    <div id="collapseTwo" className={`collapse ${isAccordionOpen(2) ? 'show' : ''}`} aria-labelledby="headingTwo"
                        data-parent="#legalAccordion2" >
                        <div className="card-body">
                            <h2>Always Data</h2>
                            <p> 91 rue du Faubourg Saint Honoré</p>
                            <p> 75008 Paris</p>
                            <p><FontAwesomeIcon icon={faGlobe} className="icon" />{' '}<a href="http://www.alwaysdata.com"
                                style={{ color: '#0d6efd' }}>www.alwaysdata.com</a></p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="accordion" id="legalAccordion3">
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <h4 className="mb-0">
                            <button className="btn btn-link" type="button" onClick={() => toggleAccordion(3)}
                                aria-expanded={isAccordionOpen(3)} aria-controls="collapseThree">
                                <h4>Crédits
                                    {isAccordionOpen(3) ? (
                                        <span className="margin-span">&#8743;</span>
                                    ) : (
                                        <span className="margin-span">&#8744;</span>
                                    )}
                                </h4>
                            </button>
                        </h4>
                    </div>
                    <div id="collapseThree" className={`collapse ${isAccordionOpen(3) ? 'show' : ''}`} aria-labelledby="headingThree"
                        data-parent="#legalAccordion3" >
                        <div className="card-body">
                            <h2>Crédits</h2>
                            <p> Site développé par John Doe, étudiant du CEF.</p>
                            <p> Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/"
                                style={{ color: '#0d6efd' }}>Pixabay</a>.</p>
                        </div>
                    </div>
                </div>
            </div>



        </section >
    );
};

export default Legal;

