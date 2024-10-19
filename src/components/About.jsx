// src/components/About.jsx
// src/components/About.jsx
import React from 'react';
import './About.css'; // Import the CSS file for styling
import campusImage from '../assets/campus.jpg'; // Adjust the path as necessary

const About = () => {
    return (
        <div className="about-section">
            <h2 className="about-title">About Campus</h2>
            <div className="about-content">
                <img src={campusImage} alt="Campus" className="about-image" />
                <div className="about-text">
                    <p>
                        Discover Your Potential at CUECK! Nestled in the serene landscapes of Kuttanad, Cochin University College of Engineering is more than just an institution—it’s a gateway to innovation and excellence.
                    </p>
                    <p>
                        With a diverse range of undergraduate engineering programs, CUECK empowers students to turn their dreams into reality. Here, you will not only gain theoretical knowledge but also hands-on experience that will set you apart in the competitive job market.
                    </p>
                    <h3>A Campus Designed for Success</h3>
                    <p>
                        At CUECK, education transcends the classroom. Our picturesque 42-acre campus is equipped with state-of-the-art facilities, from advanced laboratories to vibrant recreational spaces. Engage with like-minded peers, participate in enriching extracurricular activities, and immerse yourself in a culture of collaboration and creativity.
                    </p>
                    <p className="call-to-action">
                        Join a community that values creativity and innovation!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;