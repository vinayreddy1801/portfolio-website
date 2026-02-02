import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ paddingBottom: '8rem' }}>
            <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get In <span className="gradient-text">Touch</span></h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '4rem' }}>
                    Have a project in mind or want to discuss data engineering opportunities? Feel free to reach out.
                </p>

                <div className="glass-card" style={{ padding: '3rem', textAlign: 'left' }}>
                    <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message!'); }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name</label>
                                <input type="text" placeholder="John Doe" style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    fontFamily: 'inherit'
                                }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                                <input type="email" placeholder="john@example.com" style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '8px',
                                    color: '#fff',
                                    fontFamily: 'inherit'
                                }} />
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Message</label>
                            <textarea rows="5" placeholder="Your message here..." style={{
                                width: '100%',
                                padding: '12px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                color: '#fff',
                                fontFamily: 'inherit',
                                resize: 'vertical'
                            }}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
