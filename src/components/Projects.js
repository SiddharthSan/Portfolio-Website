// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-box">
                <h2><strong>Bookstop</strong></h2>
                <p>
                    <strong>Bookstop</strong> is an e-commerce platform designed for book enthusiasts to discover, manage, and organize books. Built using the MERN stack, it ensures a seamless user experience and efficient data handling.
                </p>
                <ul>
                    <li><strong>User Authentication:</strong> Secure login and registration system for users.</li>
                    <li><strong>Book Categorization:</strong> Organize books into various categories for easier navigation.</li>
                    <li><strong>Search Functionality:</strong> Allows users to find books efficiently using filters and keywords.</li>
                    <li><strong>Cart Management:</strong> Users can add, remove, and manage items in their cart seamlessly.</li>
                    <li><strong>Interactive UI:</strong> Designed to provide an engaging and user-friendly experience for book management.</li>
                    <li><strong>Quote of the Day:</strong> Integrated daily inspirational quotes using the Gemini API to enhance user engagement.</li>
                    <li><strong>Database Optimization:</strong> Ensures faster response times and scalability for a growing user base.</li>
                </ul>
                <p><strong>Technologies Used:</strong></p>
                    <ul>
                        <li><strong>Frontend:</strong> React.js</li>
                        <li><strong>Backend:</strong> Node.js / Express</li>
                        <li><strong>Database:</strong> MongoDB</li>
                        <li><strong>APIs:</strong> Gemini API for Quotes</li>
                        <li><strong>Others:</strong> Tailwind CSS for styling</li>
                    </ul>
                <a href="https://github.com/SiddharthSan/BookStop" target="_blank" rel="noopener noreferrer" className="github-link">View on GitHub</a>
            </div>
            <div className="project-box">
                <h2><strong>Stock Portfolio Tracker</strong></h2>
                <p>
                    A web-based application designed to manage and track stock investments efficiently. Built using React.js for a responsive and intuitive frontend experience, and Node.js/Express for robust backend handling.
                </p>
                <p><strong>Technologies Used:</strong></p>
                    <ul>
                        <li><strong>Frontend:</strong> React.js</li>
                        <li><strong>Backend:</strong> Node.js / Express</li>
                        <li><strong>Database:</strong> MySQL</li>
                        <li><strong>APIs:</strong> Alpha Vantage API for real-time stock prices</li>
                        <li><strong>Others:</strong> Tailwind CSS for styling</li>
                    </ul>
                                    <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript</p>
                <a href="https://github.com/SiddharthSan/Stock-Portfolio" target="_blank" rel="noopener noreferrer" className="github-link">View on GitHub</a>
            </div>
        </section>
    );
}

export default Projects;
