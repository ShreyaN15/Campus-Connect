// src/components/Books.jsx
// src/components/Books.jsx
import React from 'react';
import './Books.css'; // Import the CSS file for styling

const Books = () => {
    const bookList = [
        {
            title: "Engineering Mathematics",
            price: "Rs. 250",
            contact: "Amal M",
            email: "abcd@ug.cusat.ac.in",
            phone: "89877647777",
            image: require('../assets/Book1.jpg') // Path to Book1 image
        },
        {
            title: "Engineering Mathematics",
            price: "Rs. 200",
            contact: "Aleena A",
            email: "jkl@ug.cusat.ac.in",
            phone: "89877664912",
            image: require('../assets/book11.jpg') // Path to book11 image
        },
        {
            title: "Engineering Physics",
            price: "Rs. 100",
            contact: "Ardra M",
            email: "ghsd@ug.cusat.ac.in",
            phone: "7873686765",
            image: require('../assets/book2.jpg') // Path to Book2 image
        }
    ];

    return (
        <div className="books-page">
            <h2>CampusDeals - Books</h2>
            <div className="book-list">
                {bookList.map((book, index) => (
                    <div className="book-card" key={index}>
                        <img src={book.image} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>Price: {book.price}</p>
                        <p>Contact: {book.contact}</p>
                        <p>Email: {book.email}</p>
                        <p>PH.NO: {book.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;