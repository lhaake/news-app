import React from "react"
import './Footer.css';
import { Link } from "react-router-dom"

const Footer = () => {
    let textDecoration = "none";
    return (
        <div className="footer">
            <Link to="/" style={{ textDecoration }}>
                <h4>Home</h4>
            </Link>

            <Link to="/about" style={{ textDecoration }}>
                <h4>About</h4>
            </Link>
            
        </div>
    )
}

export default Footer