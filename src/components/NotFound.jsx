import React from 'react';
import '../styles/NotFound.css';

import Page404 from '../images/Page 404.jpg';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h1>404 - Not Found</h1>
                <p>La page que vous recherchez n'a pas été trouvée.</p>
                <img src={Page404} alt="Page Not Found " className="notfound-image" />
            </div>
        </div>
    );
};

export default NotFound;