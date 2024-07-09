import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreen, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        emailjs.send(
            "service_d2ahc06",
            "template_jpm1qsx",
            formData,
            "GCrF-vzO-3cEPvYgE"
        )
            .then(response => {
                console.log("SUCCESS!", response.status, response.text);
                setLoading(false);
                setSuccessMessage("Message envoyé avec succès!");
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            })
            .catch(err => {
                console.error("FAILED...", err);
                setLoading(false);
                setErrorMessage("Échec de l'envoi du message. Veuillez réessayer.");
            });
    };

    return (
        <div className="container-background">
            <Helmet>
                <title>Contact - My Website</title>
                <meta name="description" content="Contactez-moi pour un entretien ou une future collaboration. Remplissez le formulaire de contact ou utilisez les coordonnées fournies." />
                <meta name="keywords" content="contact, collaboration, formulaire de contact, coordonnées, Lyon, développeur web" />
            </Helmet>
            <main className="main-content">
                <div className="container my-5">
                    <h1 className="h1-center"><strong>ME CONTACTER</strong></h1>
                    <p className="center-p">
                        Pour me contacter en vue d'un entretien ou d'une future collaboration,
                        merci de remplir le formulaire de contact.
                    </p>
                    <hr className="custom-hr-p" />
                    <div className="d-flex flex-column flex-md-row gap-4">
                        <div className="form-column col-sm-12 col-md-6 col-lg-6">
                            <h3>Formulaire de contact</h3>
                            <hr className="custom-hr-blue" />
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Votre nom"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Votre adresse email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Votre numéro de téléphone"
                                        className="form-control"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Sujet"
                                        className="form-control"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <textarea
                                        name="message"
                                        placeholder="Votre message"
                                        className="form-control"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        Envoyer
                                    </button>
                                </div>
                            </form>
                            {successMessage && <p className="success-message">{successMessage}</p>}
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                        </div>
                        <div className="info-column col-sm-12 col-md-6 col-lg-6">
                            <h3>Mes coordonnées</h3>
                            <hr className="custom-hr-blue" />
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} className="icon-black" />{' '}
                                40 Rue Laure Diebold, 69009 Lyon, France
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faMobileScreen} className="icon-black" />{' '}
                                06 20 30 40 50
                            </p>
                            <div className="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.2658602043334!2d4.803030416051066!3d45.7804688791068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c0097d1a21c5%3A0xe9c7ecfcf9a3bb24!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sen!2sus!4v1655321414665!5m2!1sen!2sus"
                                    title="Google Map"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contact;
