import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);

        // Initialize animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, observerOptions);

        const animateElements = document.querySelectorAll('.motivation-card, .slider-item');
        animateElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-video-container">
                    <video
                        className="hero-video"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source
                            src="/Realistic_Gym_Equipment_Video_Request.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            <span className="title-line">TRANSFORM YOUR</span>
                            <span className="title-line title-accent">BODY & MIND</span>
                        </h1>
                        <p className="hero-description">
                            Where strength meets community. Atlas Fitness Elite is more than a gym—it's a movement
                            fueling champions through expert coaching, premium equipment, and unstoppable energy.
                        </p>
                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Join Now
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                Book Free Trial
                            </Link>
                            <Link to="/programs" className="btn btn-outline btn-large">
                                Explore Classes
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <div className="mouse">
                        <div className="wheel"></div>
                    </div>
                </div>
            </section>

            {/* Motivation Section */}
            <section className="motivation-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Why Choose Atlas Fitness Elite?</h2>
                        <p className="section-subtitle">World-Class Training Meets Unmatched Support</p>
                    </div>
                    <div className="motivation-grid">
                        <div className="motivation-card">
                            <div className="motivation-icon">💪</div>
                            <h3 className="motivation-title">Elite Coaching</h3>
                            <p className="motivation-text">
                                Certified trainers with proven track records. Personalized plans designed to push
                                your limits and deliver real, measurable results.
                            </p>
                        </div>
                        <div className="motivation-card">
                            <div className="motivation-icon">🏋️</div>
                            <h3 className="motivation-title">Premium Equipment</h3>
                            <p className="motivation-text">
                                Top-tier machines, Olympic-standard gear, functional training zones. Everything you
                                need to crush your workouts under one roof.
                            </p>
                        </div>
                        <div className="motivation-card">
                            <div className="motivation-icon">👥</div>
                            <h3 className="motivation-title">Community Spirit</h3>
                            <p className="motivation-text">
                                Train alongside motivated individuals. Group sessions, challenges, and a culture that
                                celebrates every victory—big or small.
                            </p>
                        </div>
                        <div className="motivation-card">
                            <div className="motivation-icon">✅</div>
                            <h3 className="motivation-title">Proven Results</h3>
                            <p className="motivation-text">
                                Track your progress with precision. From body composition to strength gains, see your
                                transformation unfold week by week.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery/Slider Section */}
            <section className="gallery-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Experience Our Facility</h2>
                        <p className="section-subtitle">Where world-class design meets performance excellence</p>
                    </div>
                </div>
                <div className="slider-container">
                    <div className="slider-track">
                        {/* Duplicate images for seamless loop */}
                        {[...Array(3)].map((_, setIndex) => (
                            <div key={setIndex} style={{ display: 'contents' }}>
                                <div className="slider-item">
                                    <img src="/gym1.jpg" alt="Rowing Machine Training" loading="lazy" />
                                </div>
                                <div className="slider-item">
                                    <img src="/gym2.jpg" alt="Leg Press Equipment" loading="lazy" />
                                </div>
                                <div className="slider-item">
                                    <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800" alt="Strength Training Zone" loading="lazy" />
                                </div>
                                <div className="slider-item">
                                    <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800" alt="HIIT Training Class" loading="lazy" />
                                </div>
                                <div className="slider-item">
                                    <img src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=800" alt="Cardio Zone" loading="lazy" />
                                </div>
                                <div className="slider-item">
                                    <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800" alt="Yoga Studio" loading="lazy" />
                                </div>
                                <div className="slider-item">
                                    <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800" alt="Personal Training" loading="lazy" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Highlights */}
            <section className="highlights-section">
                <div className="container">
                    <div className="highlights-grid">
                        <div className="highlight-item">
                            <div className="highlight-number">2500+</div>
                            <div className="highlight-label">Sq. Ft. Space</div>
                        </div>
                        <div className="highlight-item">
                            <div className="highlight-number">50+</div>
                            <div className="highlight-label">Weekly Classes</div>
                        </div>
                        <div className="highlight-item">
                            <div className="highlight-number">15+</div>
                            <div className="highlight-label">Expert Trainers</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Members Showcase */}
            <style>{`
                .instagram-gallery-item {
                    border: 3px solid transparent;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    transition: all 0.4s ease;
                }
                .instagram-gallery-item:hover {
                    box-shadow: 0 10px 40px rgba(255,0,51,0.6);
                    border-color: #ff0033;
                }
            `}</style>
            <section className="instagram-section" style={{ padding: '4rem 0', background: '#f5f5f5' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <p style={{ color: '#ff0033', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', marginBottom: '0.5rem' }}>⭐⭐⭐</p>
                        <p style={{ color: '#666', fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem' }}>ATLAS FITNESS ELITE</p>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0a0a0a', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                            Authentic, Athletic<br />Members
                        </h2>
                        <a
                            href="https://instagram.com/atlasfitnesselite"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '12px 30px',
                                border: '2px solid #0a0a0a',
                                borderRadius: '8px',
                                color: '#0a0a0a',
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = '#0a0a0a';
                                e.currentTarget.style.color = '#fff';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.color = '#0a0a0a';
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            atlasfitnesselite
                        </a>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '1rem',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        <div
                            className="instagram-gallery-item"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1.1)';
                                img.style.filter = 'brightness(0.8)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(255,0,51,0.6)';
                                e.currentTarget.style.borderColor = '#ff0033';
                            }}
                            onMouseLeave={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1)';
                                img.style.filter = 'brightness(1)';
                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = 'transparent';
                            }}
                        >
                            <img src="/gym1.jpg" alt="Member training" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'all 0.4s ease'
                            }} />
                        </div>
                        <div
                            className="instagram-gallery-item"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1.1)';
                                img.style.filter = 'brightness(0.8)';
                            }}
                            onMouseLeave={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1)';
                                img.style.filter = 'brightness(1)';
                            }}
                        >
                            <img src="/gym2.jpg" alt="Member workout" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'all 0.4s ease'
                            }} />
                        </div>
                        <div
                            className="instagram-gallery-item"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1.1)';
                                img.style.filter = 'brightness(0.8)';
                            }}
                            onMouseLeave={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1)';
                                img.style.filter = 'brightness(1)';
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500" alt="HIIT class" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'all 0.4s ease'
                            }} />
                        </div>
                        <div
                            className="instagram-gallery-item"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1.1)';
                                img.style.filter = 'brightness(0.8)';
                            }}
                            onMouseLeave={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1)';
                                img.style.filter = 'brightness(1)';
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500" alt="Strength training" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'all 0.4s ease'
                            }} />
                        </div>
                        <div
                            className="instagram-gallery-item"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1.1)';
                                img.style.filter = 'brightness(0.8)';
                            }}
                            onMouseLeave={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1)';
                                img.style.filter = 'brightness(1)';
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500" alt="Yoga class" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'all 0.4s ease'
                            }} />
                        </div>
                        <div
                            className="instagram-gallery-item"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1.1)';
                                img.style.filter = 'brightness(0.8)';
                            }}
                            onMouseLeave={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1)';
                                img.style.filter = 'brightness(1)';
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500" alt="Personal training" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'all 0.4s ease'
                            }} />
                        </div>
                        <div
                            className="instagram-gallery-item"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1.1)';
                                img.style.filter = 'brightness(0.8)';
                            }}
                            onMouseLeave={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1)';
                                img.style.filter = 'brightness(1)';
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=500" alt="Cardio zone" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'all 0.4s ease'
                            }} />
                        </div>
                        <div
                            className="instagram-gallery-item"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1.1)';
                                img.style.filter = 'brightness(0.8)';
                            }}
                            onMouseLeave={(e) => {
                                const img = e.currentTarget.querySelector('img');
                                img.style.transform = 'scale(1)';
                                img.style.filter = 'brightness(1)';
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500" alt="Group training" style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'all 0.4s ease'
                            }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories / Transformations */}
            <section style={{ padding: '5rem 0', background: '#fff' }}>
                <style>{`
                    @media (max-width: 768px) {
                        .success-stories-grid {
                            grid-template-columns: 1fr !important;
                            padding: 0 1rem !important;
                            gap: 2rem !important;
                        }
                        .success-story-card {
                            padding: 1.5rem !important;
                        }
                        .success-story-img {
                            height: 250px !important;
                        }
                        .success-story-title {
                            font-size: 1.8rem !important;
                        }
                        .success-story-stats {
                            gap: 1rem !important;
                        }
                    }
                `}</style>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <p style={{ color: '#ff0033', fontSize: '0.9rem', fontWeight: '700', letterSpacing: '2px', marginBottom: '0.5rem' }}>
                            REAL RESULTS
                        </p>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#0a0a0a', marginBottom: '1rem' }}>
                            Success Stories
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
                            See the incredible transformations our members have achieved with dedication and our expert guidance
                        </p>
                    </div>

                    <div className="success-stories-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {/* Transformation Story 1 */}
                        <div className="success-story-card" style={{
                            background: 'linear-gradient(135deg, #f5f5f5, #fff)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                            border: '3px solid transparent',
                            transition: 'all 0.4s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 15px 50px rgba(255,0,51,0.6)';
                                e.currentTarget.style.borderColor = '#ff0033';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = 'transparent';
                            }}
                        >
                            <img className="success-story-img" src="/transformation1.png" alt="Transformation" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            <div className="success-story-card" style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 className="success-story-title" style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0a0a0a', marginBottom: '0.25rem' }}>
                                            Rajesh Kumar
                                        </h3>
                                        <p style={{ color: '#ff0033', fontSize: '0.9rem', fontWeight: '700' }}>
                                            Lost 25 kg in 6 months
                                        </p>
                                    </div>
                                </div>
                                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
                                    "I never thought I could transform my body at 35. The trainers at Atlas Fitness Elite created a personalized plan that fit my lifestyle. The results speak for themselves!"
                                </p>
                                <div className="success-story-stats" style={{ display: 'flex', gap: '2rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ff0033' }}>25kg</div>
                                        <div style={{ fontSize: '0.85rem', color: '#999' }}>Weight Lost</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ff0033' }}>6</div>
                                        <div style={{ fontSize: '0.85rem', color: '#999' }}>Months</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ff0033' }}>15%</div>
                                        <div style={{ fontSize: '0.85rem', color: '#999' }}>Body Fat</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Transformation Story 2 */}
                        <div style={{
                            background: 'linear-gradient(135deg, #f5f5f5, #fff)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                            border: '3px solid transparent',
                            transition: 'all 0.4s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 15px 50px rgba(255,0,51,0.6)';
                                e.currentTarget.style.borderColor = '#ff0033';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = 'transparent';
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800" alt="Success Story" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0a0a0a', marginBottom: '0.25rem' }}>
                                            Priya Sharma
                                        </h3>
                                        <p style={{ color: '#ff0033', fontSize: '0.9rem', fontWeight: '700' }}>
                                            Gained 8kg Muscle Mass
                                        </p>
                                    </div>
                                </div>
                                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
                                    "From skinny to strong! The strength training program helped me build confidence and muscle. I feel powerful and energized every day!"
                                </p>
                                <div style={{ display: 'flex', gap: '2rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ff0033' }}>+8kg</div>
                                        <div style={{ fontSize: '0.85rem', color: '#999' }}>Muscle Gain</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ff0033' }}>4</div>
                                        <div style={{ fontSize: '0.85rem', color: '#999' }}>Months</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ff0033' }}>45kg</div>
                                        <div style={{ fontSize: '0.85rem', color: '#999' }}>Deadlift PR</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Transformation Story 3 */}
                        <div style={{
                            background: 'linear-gradient(135deg, #f5f5f5, #fff)',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                            border: '3px solid transparent',
                            transition: 'all 0.4s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.boxShadow = '0 15px 50px rgba(255,0,51,0.6)';
                                e.currentTarget.style.borderColor = '#ff0033';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.1)';
                                e.currentTarget.style.borderColor = 'transparent';
                            }}
                        >
                            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800" alt="Fitness Achievement" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            <div style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0a0a0a', marginBottom: '0.25rem' }}>
                                            Arjun Reddy
                                        </h3>
                                        <p style={{ color: '#ff0033', fontSize: '0.9rem', fontWeight: '700' }}>
                                            Completed First Marathon
                                        </p>
                                    </div>
                                </div>
                                <p style={{ color: '#666', lineHeight: '1.8', marginBottom: '1rem' }}>
                                    "I went from couch potato to marathon runner! The cardio and HIIT programs built my endurance from zero to hero. Couldn't have done it without this amazing team!"
                                </p>
                                <div style={{ display: 'flex', gap: '2rem', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ff0033' }}>42km</div>
                                        <div style={{ fontSize: '0.85rem', color: '#999' }}>Marathon</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ff0033' }}>5</div>
                                        <div style={{ fontSize: '0.85rem', color: '#999' }}>Months</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#ff0033' }}>3:45</div>
                                        <div style={{ fontSize: '0.85rem', color: '#999' }}>Finish Time</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <p style={{ fontSize: '1.3rem', color: '#0a0a0a', fontWeight: '700', marginBottom: '1rem' }}>
                            Ready to Write Your Success Story?
                        </p>
                        <Link to="/contact" style={{
                            display: 'inline-block',
                            padding: '1.2rem 3rem',
                            background: 'linear-gradient(135deg, #ff0033, #cc0029)',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontSize: '1.1rem',
                            fontWeight: '700',
                            boxShadow: '0 10px 30px rgba(255, 0, 51, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 0, 51, 0.4)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 0, 51, 0.3)';
                            }}
                        >
                            Start Your Transformation Today
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Transform Your Life?</h2>
                        <p className="cta-text">
                            Join the Atlas Fitness Elite community today. Get started with a free trial and
                            experience world-class fitness training that delivers real results.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Get Started Now
                            </Link>
                            <Link to="/membership" className="btn btn-secondary btn-large">
                                View Membership Plans
                            </Link>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.4237837937846!2d78.55853680707648!3d17.423869369056408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a1c6e98d5c7%3A0x8e4db9e4e4e4e4e4!2sAtlas%20Fitness%20Elite!5e0!3m2!1sen!2sin!4v1734335540000!5m2!1sen!2sin"
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
                            href="https://maps.app.goo.gl/Hx3sMA2D937azJWPA"
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

export default Home;
