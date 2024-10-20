import React, { useState } from 'react';
import './EventChart.css';

const EventChart = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = [
        { id: 1, name: 'Annual Tech Symposium', date: '2024-03-15', image: 'tech_symposium.jpg' },
        { id: 2, name: 'Cultural Fest', date: '2024-04-20', image: 'cultural_fest.jpg' },
        { id: 3, name: 'Sports Meet', date: '2024-05-10', image: 'sports_meet.jpg' },
    ];

    return (
        <div className="eventChart">
            <header className="header">
                <h1>College Event Chart</h1>
                <p>Explore our exciting events throughout the year!</p>
            </header>

            <main className="main">
                <section className="upcomingEvents">
                    <h2>Upcoming Events</h2>
                    <div className="eventGrid">
                        {events.map((event) => (
                            <div key={event.id} className="eventCard" onClick={() => setSelectedEvent(event)}>
                                <img src={`/images/${event.image}`} alt={event.name} />
                                <h3>{event.name}</h3>
                                <p>{new Date(event.date).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {selectedEvent && (
                    <section className="eventDetails">
                        <h2>{selectedEvent.name}</h2>
                        <img src={`/images/${selectedEvent.image}`} alt={selectedEvent.name} />
                        <p>Date: {new Date(selectedEvent.date).toLocaleDateString()}</p>
                        <p>Join us for an exciting day of activities and learning!</p>
                        <button className="registerButton">Register Now</button>
                    </section>
                )}
            
                <section className="videoSection">
                    <h2>Event Highlights</h2>
                    <div className="videoWrapper">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/m5Q5MGVNwMw?si=GnP5yK-4b-5kbds5"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                            title="Event Highlights" 
                          
                            allowFullScreen>
                        </iframe>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2024 CUCEK. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default EventChart;