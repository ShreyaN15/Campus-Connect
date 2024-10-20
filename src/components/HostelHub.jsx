import React, { useState } from 'react';
import './HostelHub.css';

const HostelHub = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');
    const [showModal, setShowModal] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const hostels = [
        {
            id: 1,
            name: 'SH ACCOMODATION',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWCSW_ZcLLvsrKBq632HVu-ZosC51QjesZQ&s',
            vacancy: 12,
            rent: 6000,
            distance: '600 m',
            type: 'Ladies hostel',
            rating: 4
        },
        {
            id: 2,
            name: 'MANALAYIL HOMES',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPX99pfAANUUoeuSgwY7S-V8qnv1fSwYMlYg&s',
            vacancy: 3,
            rent: 5500,
            distance: '2 km',
            type: 'Mens hostel',
            rating: 3
        },
        // Add more hostel data as needed
    ];

    const handleLoginClick = () => {
        setIsLogin(true);
        setShowModal(true);
    };

    const handleBookClick = () => {
        setShowModal(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isLogin && password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        // Here you would typically send a request to your backend
        console.log(isLogin ? 'Logging in...' : 'Signing up...', { username, password });
        setShowModal(false);
        setUsername('');
        setPassword('');
        setConfirmPassword('');
    };

    const filteredHostels = hostels.filter(hostel => 
        (filter === 'All' || hostel.type.includes(filter)) &&
        (hostel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hostel.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hostel.distance.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hostel.rent.toString().includes(searchTerm) ||
        hostel.vacancy.toString().includes(searchTerm))
    );

    return (
        <div className="hostel-hub">
            <header>
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Search hostels by name, vacancy, ladies/mens, rent, distance" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>🔍</button>
                </div>
                <button className="login-button" onClick={handleLoginClick}>Login</button>
                <div className="user-avatar">👤</div>
            </header>

            <h1>Hostel Hub</h1>

            <div className="filter-buttons">
                <button onClick={() => setFilter('All')} className={filter === 'All' ? 'active' : ''}>All</button>
                <button onClick={() => setFilter('Ladies')} className={filter === 'Ladies' ? 'active' : ''}>Ladies</button>
                <button onClick={() => setFilter('Mens')} className={filter === 'Mens' ? 'active' : ''}>Mens</button>
            </div>

            <div className="hostel-list">
                {filteredHostels.map(hostel => (
                    <div key={hostel.id} className="hostel-card">
                        <img src={hostel.image} alt={hostel.name} />
                        <div className="hostel-info">
                            <h2>{hostel.name}</h2>
                            <p>VACANCY: {hostel.vacancy}</p>
                            <p>RENT: Rs. {hostel.rent}</p>
                            <p>{hostel.distance} away from college</p>
                            <p>{hostel.type}</p>
                            <div className="rating">
                                {'★'.repeat(hostel.rating)}{'☆'.repeat(5 - hostel.rating)}
                            </div>
                            <button className="book-button" onClick={handleBookClick}>BOOK</button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="login-modal">
                        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Username" 
                                required 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {!isLogin && (
                                <input 
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            )}
                            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
                        </form>
                        <p>
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button onClick={() => setIsLogin(!isLogin)}>
                                {isLogin ? 'Sign Up' : 'Login'}
                            </button>
                        </p>
                        <button className="close-modal" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HostelHub;