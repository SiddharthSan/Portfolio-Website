// src/components/Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
    return (
        <section id="experience" className="experience">
            <h2>Experience</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-icon"></div>
                    <div className="timeline-content">
                        <h3><strong>Michelin</strong></h3>
                        <h4>Software Development Intern</h4>
                        <span>June 2025 - Present</span>
                        <p>
                            Built an MCP server to validate OpenAPI Specification (OAS) files and generate updated specifications, leveraging a custom Node.js endpoint developed to streamline the OAS lifecycle.
                            <br /><br />

                            <strong>Key responsibilities:</strong><br />

                            Added a comprehensive statistics page to the existing API platform using Spring Boot and Angular, improving visibility into system performance and usage analytics.
                            <br /><br />

                            Gained hands-on experience with API management using Gravitee, working on API onboarding, policy configuration, and improving overall API governance within the system.
                        </p>

                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon"></div>
                    <div className="timeline-content narrow">
                        <h3><strong>Project Human City</strong></h3>
                        <h4>Full Stack Developer Intern</h4>
                        <span>Jun 2024 - Aug 2024</span>
                        <p>
                            Contributed to the development of interactive widgets for the website using JavaScript, HTML, CSS, and Java, enhancing the platform's functionality and user engagement.<br /><br />
                            <strong>Key responsibilities:</strong><br />
                            - Designed and developed the frontend of the project using React, creating dynamic and responsive user interfaces that improved user experience through a component-based architecture.<br />
                            - Implemented a Drag and Drop feature to enable seamless user interactions, improving the platform's usability.<br />
                            - Collaborated with the backend team to integrate APIs, ensuring smooth data flow and synchronization between the frontend and backend.<br />
                            - Conducted thorough testing and debugging to identify and resolve issues, ensuring the stability and reliability of the application.<br />
                            - Worked closely with the design team to translate UI/UX designs into functional and visually appealing components.
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-icon"></div>
                    <div className="timeline-content">
                        <h3><strong>Acmegrade</strong></h3>
                        <h4>Web Development Intern</h4>
                        <span>July 2023 - August 2023</span>
                        <p>
                            Contributed to the development of a fully functional e-commerce platform, focusing on both frontend and backend aspects to deliver a seamless user experience.<br /><br />
                            <strong>Key responsibilities:</strong><br />
                            - Designed and implemented the frontend using JavaScript, HTML, and CSS, ensuring a responsive and visually appealing user interface.<br />
                            - Collaborated with the team to create reusable components and improve code maintainability.<br />
                            - Worked on database management, including schema design, data storage, and retrieval, to support the platform's functionality.<br />
                            - Conducted testing and debugging to ensure the platform's reliability and performance.<br />
                            - Gained experience in integrating APIs to enhance the platform's features and functionality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
