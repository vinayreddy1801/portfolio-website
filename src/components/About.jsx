import React from 'react';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: 'var(--color-surface)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    {/* Text Content */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem' }}>About <span className="gradient-text">Me</span></h2>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                            I am a driven technology professional with a strong foundation in Data Engineering and Full-Stack Development. My passion lies in building systems that solve complex problems, whether it's optimizing manufacturing telemetry pipelines or creating insightful dashboards for marketing analytics.
                        </p>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
                            With expertise in Python, SQL, Azure, and modern web technologies, I bridge the gap between raw data and decision-making. I enjoy hackathons and collaborative projects that push the boundaries of what's possible with AI and cloud computing.
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '0' }}>5+</h3>
                                <span style={{ color: 'var(--color-text-muted)' }}>Projects Completed</span>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '3rem', color: 'var(--color-secondary)', marginBottom: '0' }}>3+</h3>
                                <span style={{ color: 'var(--color-text-muted)' }}>Years Experience</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Image Placeholder */}
                    <div className="glass-card" style={{
                        height: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(45deg, var(--color-primary), transparent)',
                            opacity: 0.1,
                            zIndex: 0
                        }}></div>
                        <span style={{ zIndex: 1, fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>
                            (Profile Image Placeholder)
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
