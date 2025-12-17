import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />

            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <div className="page-header-content">
                        <h1 className="page-title">About Us</h1>
                        <p className="page-subtitle">Where Strength Meets Community</p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="container">
                    <div className="mission-content">
                        <span className="mission-badge">OUR MISSION</span>
                        <h2 className="mission-title">
                            Empowering Transformations Through Expert Guidance & Community Spirit
                        </h2>
                        <p className="mission-text">
                            At Atlas Fitness Elite, we believe fitness is more than reps and sets—it's a lifestyle,
                            a mindset, and a community. Our mission is to provide world-class training in an
                            inclusive environment where everyone, from beginners to athletes, can thrive.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Core Values</h2>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🏆</div>
                            <h3 className="value-title">Excellence</h3>
                            <p className="value-text">
                                We strive for excellence in every aspect—from our equipment to our coaching
                                standards.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">🤝</div>
                            <h3 className="value-title">Community</h3>
                            <p className="value-text">
                                A supportive environment where members motivate each other to reach new heights.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">📈</div>
                            <h3 className="value-title">Results</h3>
                            <p className="value-text">
                                Data-driven approach to track and celebrate every milestone in your fitness journey.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">💡</div>
                            <h3 className="value-title">Innovation</h3>
                            <p className="value-text">
                                Cutting-edge training methods and continuously evolving programs to keep you engaged.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promise Section */}
            <section className="promise-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Promise to You</h2>
                    </div>
                    <div className="promise-grid">
                        <div className="promise-card">
                            <div className="promise-number">01</div>
                            <h3 className="promise-title">Expert Trainers</h3>
                            <p className="promise-text">
                                All our trainers are certified professionals with years of experience in strength
                                training, nutrition, and functional fitness.
                            </p>
                        </div>
                        <div className="promise-card">
                            <div className="promise-number">02</div>
                            <h3 className="promise-title">Premium Equipment</h3>
                            <p className="promise-text">
                                Only the best for our members. From Olympic barbells to state-of-the-art cardio
                                machines, we've got it all.
                            </p>
                        </div>
                        <div className="promise-card">
                            <div className="promise-number">03</div>
                            <h3 className="promise-title">Clean & Safe Environment</h3>
                            <p className="promise-text">
                                Hygiene is paramount. Our facility is sanitized multiple times daily, ensuring a
                                safe workout environment.
                            </p>
                        </div>
                        <div className="promise-card">
                            <div className="promise-number">04</div>
                            <h3 className="promise-title">Flexible Membership</h3>
                            <p className="promise-text">
                                Choose from a variety of plans that fit your schedule and budget. No hidden fees, no
                                long-term commitments.
                            </p>
                        </div>
                        <div className="promise-card">
                            <div className="promise-number">05</div>
                            <h3 className="promise-title">Personalized Attention</h3>
                            <p className="promise-text">
                                Whether you're in a group class or one-on-one session, you'll receive tailored
                                guidance to meet your goals.
                            </p>
                        </div>
                        <div className="promise-card">
                            <div className="promise-number">06</div>
                            <h3 className="promise-title">Community Events</h3>
                            <p className="promise-text">
                                Regular challenges, workshops, and social events to keep you motivated and connected
                                with fellow members.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trainer Profiles */}
            {/* <section style={{ padding: '5rem 0', background: '#fff' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <p style={{ color: '#ff0033', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                            MEET THE TEAM
                        </p>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#0a0a0a', marginBottom: '1rem' }}>
                            Expert Trainers Who Care
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                            Our certified professionals bring years of experience and passion to help you achieve your fitness goals
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                        {[
                            {
                                name: "Vikram Singh",
                                role: "Head Trainer & Strength Coach",
                                image: "/trainer1.png",
                                certifications: ["NASM-CPT", "CrossFit L2", "Nutrition Specialist"],
                                specialization: "Strength & Conditioning, Olympic Lifting",
                                experience: "8+ years",
                                achievement: "Former State Powerlifting Champion"
                            },
                            {
                                name: "Priya Menon",
                                role: "Functional Training Expert",
                                image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600",
                                certifications: ["ACE-CPT", "TRX Certified", "Yoga Alliance RYT"],
                                specialization: "HIIT, Functional Training, Mobility",
                                experience: "6+ years",
                                achievement: "Marathon Runner & Hyrox Competitor"
                            },
                            {
                                name: "Arjun Reddy",
                                role: "Calisthenics & Parkour Specialist",
                                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
                                certifications: ["FIG Gymnastics Coach", "Parkour Generations L3"],
                                specialization: "Bodyweight Training, Movement",
                                experience: "7+ years",
                                achievement: "National Calisthenics Champion 2022"
                            },
                            {
                                name: "Sana Patel",
                                role: "Nutrition & Wellness Coach",
                                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
                                certifications: ["Precision Nutrition L2", "Sports Dietitian"],
                                specialization: "Nutrition Planning, Weight Management",
                                experience: "5+ years",
                                achievement: "Helped 200+ transformations"
                            }
                        ].map((trainer, index) => (
                            <div
                                key={index}
                                style={{
                                    background: 'linear-gradient(135deg, #f9f9f9, #fff)',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-15px)';
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(255,0,51,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                                }}
                            >
                                <div style={{ position: 'relative', overflow: 'hidden', height: '350px' }}>
                                    <img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease'
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                        padding: '3rem 1.5rem 1.5rem',
                                        color: '#fff'
                                    }}>
                                        <h3 style={{ fontSize: '1.6rem', fontWeight: '900', marginBottom: '0.3rem' }}>
                                            {trainer.name}
                                        </h3>
                                        <p style={{ fontSize: '0.95rem', color: '#00d4ff', fontWeight: '600' }}>
                                            {trainer.role}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ padding: '2rem' }}>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: '#ff0033', fontWeight: '700', marginBottom: '0.8rem', letterSpacing: '1px' }}>
                                            Certifications
                                        </h4>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                            {trainer.certifications.map((cert, i) => (
                                                <span
                                                    key={i}
                                                    style={{
                                                        background: '#f0f0f0',
                                                        padding: '0.4rem 0.8rem',
                                                        borderRadius: '20px',
                                                        fontSize: '0.75rem',
                                                        fontWeight: '600',
                                                        color: '#0a0a0a'
                                                    }}
                                                >
                                                    {cert}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '1rem' }}>
                                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>
                                            <strong style={{ color: '#0a0a0a' }}>Specialization:</strong> {trainer.specialization}
                                        </p>
                                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>
                                            <strong style={{ color: '#0a0a0a' }}>Experience:</strong> {trainer.experience}
                                        </p>
                                    </div>

                                    <div style={{
                                        background: 'linear-gradient(135deg, #ff0033, #cc0029)',
                                        padding: '1rem',
                                        borderRadius: '10px',
                                        marginTop: '1rem'
                                    }}>
                                        <p style={{ fontSize: '0.85rem', color: '#fff', margin: 0, textAlign: 'center', fontWeight: '600' }}>
                                            🏆 {trainer.achievement}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2.5rem', background: '#f9f9f9', borderRadius: '15px' }}>
                        <h3 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#0a0a0a', marginBottom: '1rem' }}>
                            Want to Train with the Best?
                        </h3>
                        <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            Our trainers are ready to create a personalized program just for you
                        </p>
                        <Link
                            to="/contact"
                            style={{
                                display: 'inline-block',
                                padding: '1.2rem 3rem',
                                background: 'linear-gradient(135deg, #ff0033, #cc0029)',
                                color: '#fff',
                                textDecoration: 'none',
                                borderRadius: '50px',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                boxShadow: '0 10px 30px rgba(255,0,51,0.3)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255,0,51,0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,0,51,0.3)';
                            }}
                        >
                            Book Your Free Consultation
                        </Link>
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Join the Atlas Family Today</h2>
                        <p className="cta-text">
                            Experience the difference of training in a facility that truly cares about your
                            success. Book your free trial and see why our members love Atlas Fitness Elite.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Book Free Trial
                            </Link>
                            <Link to="/membership" className="btn btn-outline btn-large">
                                View Membership Plans
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default About;
