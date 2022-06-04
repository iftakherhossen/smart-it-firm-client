import React from 'react';
import { Link } from 'react-router-dom';
import '../NotFound.css';

const NotFound = () => {
    return (
        <div id='star'>
            <div className='notFound'>
                <h1>404</h1>
                <h2 className="h2">Not Found!</h2>
                <Link to="/" className="notFoundLink">Home</Link>
                <div className="cloak__wrapper">
                    <div className="cloak__container">
                        <div className="cloak"></div>
                    </div>
                </div>                    
            </div>
        </div>
    );
};

export default NotFound;