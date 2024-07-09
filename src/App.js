import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Realisation from './pages/Realisation';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import GitHubProfile from './components/GitHubProfile';
import FreshFood from './components/FreshFood';
import RestaurantAkira from './components/RestaurantAkira';
import EspaceBienEtre from './components/EspaceBienEtre';
import CoderSonSite from './components/CoderSonSite';
import VendreSesProduits from './components/VendreSesProduits';
import PositionGoogle from './components/PositionGoogle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const specialPaths = [
  "/freshFood",
  "/restaurantakira",
  "/espacebienetre",
  "/codersonsite",
  "/vendresesproduits",
  "/positiongoogle",
];

const specialOffset = 380;

const AppContent = () => {
  const location = useLocation();
  const isGitHubProfile = location.pathname === "/github-profile";

  return (
    <>
      {!isGitHubProfile && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/github-profile" element={<GitHubProfile />} />
        <Route path="/freshfood" element={<FreshFood />} />
        <Route path="/restaurantakira" element={<RestaurantAkira />} />
        <Route path="/espacebienetre" element={<EspaceBienEtre />} />
        <Route path="/codersonsite" element={<CoderSonSite />} />
        <Route path="/vendresesproduits" element={<VendreSesProduits />} />
        <Route path="/positiongoogle" element={<PositionGoogle />} />
      </Routes>
      {!isGitHubProfile && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <>
      <Helmet>
        <title>John Doe - Portfolio</title>
        <meta name="description" content="Portfolio de John Doe, développeur web full stack. Découvrez ses services, réalisations, blog et contactez-le." />
      </Helmet>
      <ScrollToTop specialPaths={specialPaths} specialOffset={specialOffset} defaultOffset={0} />
      <div className="App">
        <AppContent />
      </div>
    </>
  );
};

export default App;
