import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--color-primary)',
                filter: 'blur(150px)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '5%',
                width: '300px',
                height: '300px',
                background: 'var(--color-secondary)',
                filter: 'blur(120px)',
                opacity: 0.1,
                borderRadius: '50%',
                zIndex: -1
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <p className="animate-slideInLeft" style={{
                        color: 'var(--color-primary)',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        animationDelay: '0.1s'
                    }}>
                        Hello, I'm Vinay Reddy
                    </p>

                    <h1 className="animate-slideInLeft" style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        animationDelay: '0.2s'
                    }}>
                        Building <span className="gradient-text">Digital Experiences</span> that Matter.
                    </h1>

                    <p className="animate-slideInLeft" style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        animationDelay: '0.3s'
                    }}>
                        I am a passionate developer focused on data engineering, marketing analytics, and full-stack applications. I turn complex data into actionable insights and beautiful interfaces.
                    </p>

                    <div className="animate-slideInLeft" style={{ animationDelay: '0.4s', display: 'flex', gap: '1rem' }}>
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
