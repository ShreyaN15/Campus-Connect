// src/components/Electronics.jsx
// src/components/Electronics.jsx
import React from 'react';
import './Electronics.css'; // Import the CSS file for styling

const Electronics = () => {
    const electronicsList = [
        {
            title: "Calculator 1",
            price: "Rs. 1,500",
            contact: "Alice B",
            email: "alice@ug.cusat.ac.in",
            phone: "9876543212",
            image: require('../assets/calci1.jpg') // Path to calci1 image
        },
        {
            title: "Calculator 2",
            price: "Rs. 1,200",
            contact: "Bob C",
            email: "bob@ug.cusat.ac.in",
            phone: "9876543213",
            image: require('../assets/calci2.jpg') // Path to calci2 image
        },
        {
            title: "Calculator 3",
            price: "Rs. 1,000",
            contact: "Charlie D",
            email: "charlie@ug.cusat.ac.in",
            phone: "9876543214",
            image: require('../assets/calci3.jpg') // Path to calci3 image
        }
    ];

    return (
        <div className="electronics-page">
            <h2>CampusDeals - Electronics</h2>
            <div className="electronics-list">
                {electronicsList.map((item, index) => (
                    <div className="electronics-card" key={index}>
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>Price: {item.price}</p>
                        <p>Contact: {item.contact}</p>
                        <p>Email: {item.email}</p>
                        <p>PH.NO: {item.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Electronics;