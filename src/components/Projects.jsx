import React from 'react';
import { projects } from '../data/projects';

const ProjectCard = ({ project }) => {
    return (
        <div
            className="glass-card"
            style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
            }}
        >
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                    {project.description}
                </p>
            </div>

            <div style={{ marginTop: 'auto' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.75rem',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            background: 'rgba(0, 243, 255, 0.1)',
                            color: 'var(--color-primary)',
                            border: '1px solid rgba(0, 243, 255, 0.2)'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: '#fff',
                        fontWeight: '600'
                    }}
                    className="hover:text-primary"
                >
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem' }}>Featured <span className="gradient-text">Projects</span></h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px' }}>
                        A selection of my recent work in software engineering, data analysis, and telemetry pipelines.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
