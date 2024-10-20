// src/components/Stationery.jsx
// src/components/Stationery.jsx
import React from 'react';
import './Stationary.css'; // Import the CSS file for styling

const Stationary = () => {
    const stationaryList = [
        {
            title: "Stationery Set",
            price: "Rs. 150",
            contact: "John D",
            email: "john@ug.cusat.ac.in",
            phone: "9876543210",
            image: require('../assets/sta0.jpg') // Path to sta0 image
        },
        {
            title: "Art Supplies",
            price: "Rs. 300",
            contact: "Jane D",
            email: "jane@ug.cusat.ac.in",
            phone: "9876543211",
            image: require('../assets/sta1.jpg') // Path to st1 image
        },
        {
            title: "More Stationery",
            price: "Rs. 200",
            contact: "Doe J",
            email: "doe@ug.cusat.ac.in",
            phone: "9876543212",
            image: require('../assets/sta2.jpg') // Path to st2 image
        }
    ];

    return (
        <div className="stationary-page">
            <h2>CampusDeals - Stationery</h2>
            <div className="stationary-list">
                {stationaryList.map((item, index) => (
                    <div className="stationary-card" key={index}>
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

export default Stationary;