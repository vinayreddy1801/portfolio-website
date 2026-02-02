import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '2rem 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            color: 'var(--color-text-muted)',
            fontSize: '0.9rem'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Vinay Reddy. All rights reserved.</p>
                <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <a href="https://github.com/vinayreddy1801" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
                    <a href="#" className="hover:text-primary">LinkedIn</a>
                    <a href="mailto:example@email.com" className="hover:text-primary">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
