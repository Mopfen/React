import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => (
        <header>
            <Link to="/" className="btn btn-primary">Home</Link>
            <Link to="/beers" className="btn btn-danger">Piwa</Link>
        </header>
)
export default Header