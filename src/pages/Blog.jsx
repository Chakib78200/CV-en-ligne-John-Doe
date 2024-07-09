import React from 'react';
import { Helmet } from 'react-helmet';
import imageNavBar from '../images/NavBar.jpg';
import Coder from '../images/Coder.jpg';
import Produits from '../images/Produits.jpg';
import Position from '../images/Positionner Google.jpg';
import Responsive from '../images/Responsive.jpg';
import Referencement from '../images/Référencement.jpg';
import Apprendre from '../images/Apprendre.jpg';
import '../styles/Blog.css';

const Blog = () => {
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
                        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center mb-4">
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

                        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center mb-4">
                            <div className="card text-center">
                                <img src={Produits} alt="Produits" className="img-fluid card-img-top" />
                                <div className="card-item">
                                    <div className="card-margin">
                                        <h2 className="align-start-h2">Vendre ses produits sur le web</h2>
                                        <p className="align-start-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" className="btn btn-primary d-flex flex-row">Lire la suite</button>
                                    </div>
                                    <hr className="gray-color" />
                                    <div className="border-blog">
                                        <p className="margin-p10">Publié le 20 août 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center mb-4">
                            <div className="card text-center">
                                <img src={Position} alt="Position Google" className="img-fluid card-img-top" />
                                <div className="card-item">
                                    <div className="card-margin">
                                        <h2 className="align-start-h2">Se positionner sur Google</h2>
                                        <p className="align-start-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" className="btn btn-primary d-flex flex-row">Lire la suite</button>
                                    </div>
                                    <hr className="gray-color" />
                                    <div className="border-blog">
                                        <p className="margin-p10">Publié le 1 août 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center mb-4">
                            <div className="card text-center">
                                <img src={Responsive} alt="Responsive" className="img-fluid card-img-top" />
                                <div className="card-item">
                                    <div className="card-margin">
                                        <h2 className="align-start-h2">Coder en responsive design</h2>
                                        <p className="align-start-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" className="btn btn-primary d-flex flex-row">Lire la suite</button>
                                    </div>
                                    <hr className="gray-color" />
                                    <div className="border-blog">
                                        <p className="margin-p10">Publié le 31 juillet 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center mb-4">
                            <div className="card text-center">
                                <img src={Referencement} alt="Référencement" className="img-fluid card-img-top" />
                                <div className="card-item">
                                    <div className="card-margin">
                                        <h2 className="align-start-h2">Techniques de référencement</h2>
                                        <p className="align-start-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" className="btn btn-primary d-flex flex-row">Lire la suite</button>
                                    </div>
                                    <hr className="gray-color" />
                                    <div className="border-blog">
                                        <p className="margin-p10">Publié le 30 juillet 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center mb-4">
                            <div className="card text-center">
                                <img src={Apprendre} alt="Apprendre" className="img-fluid card-img-top" />
                                <div className="card-item">
                                    <div className="card-margin">
                                        <h2 className="align-start-h2">Apprendre à coder</h2>
                                        <p className="align-start-p">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <button type="button" className="btn btn-primary d-flex flex-row">Lire la suite</button>
                                    </div>
                                    <hr className="gray-color" />
                                    <div className="border-blog">
                                        <p className="margin-p10">Publié le 12 juillet 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Blog;
