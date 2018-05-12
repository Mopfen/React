import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <header>
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/beers" className="btn btn-danger">Piwa</Link>
            <Link to="/login" className="btn btn-warning">Login</Link>
        </header>
    );
}