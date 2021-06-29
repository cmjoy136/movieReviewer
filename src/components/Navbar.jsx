import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className='nav-logo'>
            <h2>Movie Reviewer</h2>
            </div>
            <div className="nav-links">
                <ul className="nav-link-list">
                    <li className="nav-item">
                        <Link className="nav-link" to="/search">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login/Logout</Link>
                    </li>
                </ul>
            </div>
            {/* Home button */}
            {/* Search Button */}
            {/* Login/logout */}
        </div>
    )
}

export default Navbar