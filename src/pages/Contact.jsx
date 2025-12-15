import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'general',
        message: '',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format message for WhatsApp
        const message = `*New Contact Form Submission*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Email:* ${formData.email}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Interest:* ${formData.interest}%0A` +
            `*Message:* ${formData.message}`;

        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/447944295352?text=${message}`, '_blank');

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            interest: 'general',
            message: '',
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Navbar />

            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <div className="page-header-content">
                        <h1 className="page-title">Join Us</h1>
                        <p className="page-subtitle">Start Your Fitness Journey Today</p>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Information */}
                        <div className="contact-info">
                            <h3>Get in Touch</h3>

                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div className="info-content">
                                    <h4>Location</h4>
                                    <p>
                                        Atlas Fitness Elite
                                        <br />
                                        3-4-98/4/204, New Narsina Nagar
                                        <br />
                                        O Mallapur, Hyderabad
                                        <br />
                                        Telangana - 500076
                                    </p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">📞</div>
                                <div className="info-content">
                                    <h4>Phone</h4>
                                    <p>
                                        +91 99882 29441
                                        <br />
                                        +91 83175 29757
                                        <br />
                                        <small>Available during operating hours</small>
                                    </p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">✉️</div>
                                <div className="info-content">
                                    <h4>Email</h4>
                                    <p>
                                        atlasfitnesselite@gmail.com
                                        <br />
                                        <small>We'll respond within 24 hours</small>
                                    </p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">⏰</div>
                                <div className="info-content">
                                    <h4>Operating Hours</h4>
                                    <p>
                                        <strong>Monday - Friday:</strong> 5:00 AM - 11:00 PM
                                        <br />
                                        <strong>Saturday:</strong> 5:00 AM - 11:00 PM
                                        <br />
                                        <strong>Sunday:</strong> 5:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">🌐</div>
                                <div className="info-content">
                                    <h4>Connect With Us</h4>
                                    <div className="social-links" style={{ marginTop: '1rem' }}>
                                        <a
                                            href="https://facebook.com/atlasfitnesselite"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                            aria-label="Facebook"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://instagram.com/atlasfitnesselite"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                            aria-label="Instagram"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form">
                            <h3 style={{ marginBottom: '1.5rem', color: 'white' }}>Send Us a Message</h3>
                            <form onSubmit={handleSubmit} id="contactForm">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="interest">I'm Interested In:</label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                    >
                                        <option value="general">General Inquiry</option>
                                        <option value="membership">Membership Plans</option>
                                        <option value="personal-training">Personal Training</option>
                                        <option value="group-classes">Group Classes</option>
                                        <option value="corporate">Corporate Wellness</option>
                                        <option value="trial">Free Trial</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your fitness goals or any questions you have..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-btn">
                                    Send Message
                                </button>
                            </form>

                            <div style={{ marginTop: '2rem', textAlign: 'center', color: '#999' }}>
                                <h4 style={{ color: '#fff', marginBottom: '1rem' }}>What Happens Next?</h4>
                                <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                                    <li>📧 You'll receive a confirmation email</li>
                                    <li>📞 Our team will contact you within 24 hours</li>
                                    <li>🎯 We'll discuss your goals and recommend the perfect plan</li>
                                    <li>🆓 Schedule your complimentary trial session</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section style={{ padding: '5rem 0', background: '#f5f5f5' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <p style={{ color: '#ff0033', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                            GOT QUESTIONS?
                        </p>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#0a0a0a', marginBottom: '1rem' }}>
                            Frequently Asked Questions
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#666' }}>
                            Everything you need to know before starting your fitness journey
                        </p>
                    </div>

                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {[
                            {
                                q: "Do I need prior fitness experience to join?",
                                a: "Absolutely not! We welcome members of all fitness levels, from complete beginners to advanced athletes. Our trainers will create a personalized plan that matches your current level and helps you progress safely."
                            },
                            {
                                q: "What should I bring for my first session?",
                                a: "Wear comfortable workout clothes and athletic shoes. Bring a water bottle and towel. We provide lockers for your belongings. If you have specific equipment preferences (like weightlifting gloves), feel free to bring them!"
                            },
                            {
                                q: "Is parking available at the facility?",
                                a: "Yes! We have ample free parking space right outside our facility. There's also covered parking available for two-wheelers."
                            },
                            {
                                q: "Can I try a class before committing to a membership?",
                                a: "Definitely! We offer a FREE trial class so you can experience our facility, meet our trainers, and see if we're the right fit for you. Book yours today!"
                            },
                            {
                                q: "Are your trainers certified?",
                                a: "Yes! All our trainers hold national and international certifications in personal training, nutrition, and specialized fitness disciplines. Many also compete professionally."
                            },
                            {
                                q: "What are your membership cancellation terms?",
                                a: "We offer flexible membership options. Monthly memberships can be cancelled with 15 days' notice. Long-term memberships (6-12 months) may have different terms - our team will explain everything clearly."
                            },
                            {
                                q: "Do you provide diet and nutrition guidance?",
                                a: "Yes! All our memberships include basic nutrition consultation. We can create customized meal plans and provide ongoing dietary support to help you achieve your goals faster."
                            },
                            {
                                q: "Is personal training included in the membership?",
                                a: "Group classes are included in all memberships. Personal one-on-one training sessions are available as an add-on. We offer special packages for personal training clients."
                            },
                            {
                                q: "What safety measures do you have in place?",
                                a: "Your safety is our priority! We maintain sanitized equipment, have first-aid trained staff on-site, and all classes are supervised by certified trainers. We also have CCTV surveillance throughout the facility."
                            },
                            {
                                q: "Can I freeze my membership if I'm traveling?",
                                a: "Yes! We offer membership freeze options for medical reasons, travel, or emergencies. The freeze duration and terms depend on your membership type."
                            },
                            {
                                q: "Do you offer separate timings for women?",
                                a: "While our facility is co-ed, we do offer women-only classes at specific times. Please check our class schedule or speak with our team for details."
                            },
                            {
                                q: "Is there a joining fee or hidden charges?",
                                a: "No hidden charges! The membership fee includes gym access, group classes, and basic amenities. Any additional services (like personal training or supplements) are optional and clearly priced."
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                style={{
                                    background: '#fff',
                                    padding: '2rem',
                                    borderRadius: '12px',
                                    marginBottom: '1.5rem',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                                    borderLeft: '4px solid #ff0033',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateX(10px)';
                                    e.currentTarget.style.boxShadow = '0 6px 25px rgba(255,0,51,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateX(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
                                }}
                            >
                                <h3 style={{
                                    fontSize: '1.3rem',
                                    fontWeight: '800',
                                    color: '#0a0a0a',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.8rem'
                                }}>
                                    <span style={{ color: '#ff0033', fontSize: '1.5rem' }}>Q{index + 1}.</span>
                                    {faq.q}
                                </h3>
                                <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem', paddingLeft: '2.5rem' }}>
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#fff', borderRadius: '15px' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0a0a0a', marginBottom: '1rem' }}>
                            Still Have Questions?
                        </h3>
                        <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                            Our team is here to help! Reach out via WhatsApp, call, or fill the form above.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a
                                href="tel:+919988229441"
                                style={{
                                    padding: '1rem 2rem',
                                    background: '#ff0033',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    fontWeight: '700',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#cc0029'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#ff0033'}
                            >
                                📞 Call Us
                            </a>
                            <a
                                href="https://wa.me/447944295352"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    padding: '1rem 2rem',
                                    background: '#25D366',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    borderRadius: '8px',
                                    fontWeight: '700',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#128C7E'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#25D366'}
                            >
                                💬 WhatsApp Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Maps Section */}
            <section style={{ padding: '0', background: '#0a0a0a' }}>
                <div style={{ textAlign: 'center', padding: '3rem 0 2rem', background: '#0a0a0a' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#fff', marginBottom: '0.5rem' }}>
                        Find Us Here
                    </h2>
                    <p style={{ color: '#999', fontSize: '1.1rem' }}>
                        Visit our premium facility in Mallapur, Hyderabad
                    </p>
                </div>
                <div style={{ position: 'relative', width: '100%', height: '500px', overflow: 'hidden' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8471234567!2d78.5587!3d17.4238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzI1LjciTiA3OMKwMzMnMzEuMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Atlas Fitness Elite Location"
                    ></iframe>
                    {/* Overlay with gym branding */}
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'rgba(10, 10, 10, 0.9)',
                        backdropFilter: 'blur(10px)',
                        padding: '1.5rem 2rem',
                        borderRadius: '12px',
                        border: '2px solid #ff0033',
                        maxWidth: '350px',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                    }}>
                        <h3 style={{
                            color: '#fff',
                            fontSize: '1.5rem',
                            fontWeight: '900',
                            marginBottom: '0.5rem'
                        }}>
                            Atlas<span style={{ color: '#ff0033' }}>FIT</span>
                        </h3>
                        <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                            📍 New Narsina Nagar, Mallapur<br />
                            Hyderabad, Telangana 500076
                        </p>
                        <a
                            href="https://maps.google.com/?q=New+Narsina+Nagar+Mallapur+Hyderabad+500076"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-block',
                                marginTop: '1rem',
                                padding: '0.8rem 1.5rem',
                                background: '#ff0033',
                                color: '#fff',
                                textDecoration: 'none',
                                borderRadius: '6px',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#cc0029'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#ff0033'}
                        >
                            Get Directions →
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;
