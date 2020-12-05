import React from "react"
import './About.css';

const About = () => {

    return (
        <div className="about-page"> 
            <p>The Daily News App was built by Leah Haake using React for General Assembly's Software Engineering Immersive Unit 2 Project.</p>
            <p>The API utilized for the project is <a href="https://gnews.io/" target="_blank">GNews</a></p>
            <p>Connect with Leah on <a href="https://www.linkedin.com/in/leah-haake/" target="_blank">LinkedIn!</a></p>
        </div>
    )
}

export default About