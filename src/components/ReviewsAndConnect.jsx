// src/components/ReviewsAndConnect.jsx
import React from 'react';
import './ReviewsAndConnect.css'; // Import the CSS file for styling

const ReviewsAndConnect = () => {
    return (
        <div className="reviews-and-connect" id="contact">
            <div className="reviews-section">
                <h2>See What Our Clients Say About Us</h2>
                <div className="review">
                    <p>
                        "This platform has been a game-changer for me! I was able to book a hotel room quickly and without any hassle. Plus, I found great deals on second-hand items from other students. It's simple to use, and everything is in one place. Highly recommended!"
                    </p>
                    <p className="reviewer">Agatha Matthew — Sophomore year</p>
                </div>
            </div>
            <div className="connect-section">
                <h2>Join Our Newsletter</h2>
                <form className="newsletter-form">
                    <input type="email" placeholder="Your email address" required />
                    <button type="submit">Subscribe</button>
                </form>
                <p className="note">* You will receive updates for your better packages.</p>
            </div>
        </div>
    );
};

export default ReviewsAndConnect;