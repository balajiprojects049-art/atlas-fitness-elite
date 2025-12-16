import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Facilities = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const equipment = [
        {
            name: 'Free Weights & Dumbbells',
            image: '/equipment-dumbbells.png',
            description: 'Complete range from 5 lbs to 100 lbs',
            benefits: [
                'Build muscle mass and strength',
                'Improve coordination and balance',
                'Increase bone density',
                'Burn calories efficiently',
                'Target specific muscle groups'
            ],
            uses: 'Perfect for bicep curls, shoulder presses, chest flies, lunges, and countless exercises for total body development.'
        },
        {
            name: 'Cardio Zone - Treadmills',
            image: '/equipment-treadmills.png',
            description: 'State-of-the-art running machines with digital tracking',
            benefits: [
                'Improve cardiovascular health',
                'Burn fat and calories',
                'Increase stamina and endurance',
                'Customizable speed and incline',
                'Low-impact joint-friendly option'
            ],
            uses: 'Ideal for running, walking, interval training (HIIT), warm-ups, and endurance building. Track distance, calories, heart rate in real-time.'
        },
        {
            name: 'Cable Machines & Functional Trainers',
            image: '/equipment-cables.png',
            description: 'Multi-functional pulley systems for versatile training',
            benefits: [
                'Constant tension on muscles',
                'Smooth, controlled movements',
                'Reduce injury risk',
                'Target muscles from multiple angles',
                'Perfect for rehabilitation'
            ],
            uses: 'Tricep pushdowns, cable flies, lat pulldowns, wood chops, face pulls, and over 100 exercise variations.'
        },
        {
            name: 'Power Racks & Squat Cages',
            image: '/equipment-powerrack.png',
            description: 'Heavy-duty strength training stations with safety features',
            benefits: [
                'Build maximum strength safely',
                'Train with heavy weights alone',
                'Develop functional power',
                'Increase testosterone naturally',
                'Full-body strength development'
            ],
            uses: 'Squats, bench press, deadlifts, overhead press, pull-ups, and Olympic lifting movements with safety bars.'
        },
        {
            name: 'Rowing Machines (Ergs)',
            image: '/gym1.jpg',
            description: 'Full-body cardio and strength training equipment',
            benefits: [
                'Engage 85% of body muscles',
                'Low-impact full-body workout',
                'Improve posture and core strength',
                'Increase power and explosiveness',
                'Excellent calorie burner'
            ],
            uses: 'Cardiovascular conditioning, HIIT workouts, endurance training, warm-ups, and CrossFit WODs.'
        },
        {
            name: 'Leg Press & Lower Body Machines',
            image: '/gym2.jpg',
            description: 'Specialized equipment for powerful leg development',
            benefits: [
                'Build strong, muscular legs',
                'Increase lower body power',
                'Improve athletic performance',
                'Support heavy loads safely',
                'Isolate specific leg muscles'
            ],
            uses: 'Leg press, calf raises, leg extensions, leg curls, hip abductions for complete lower body training.'
        },
        {
            name: 'Olympic Barbells & Plates',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800',
            description: 'Professional-grade barbells and bumper plates',
            benefits: [
                'Build explosive strength',
                'Develop full-body power',
                'Improve athletic performance',
                'Increase muscle mass',
                'Enhance coordination'
            ],
            uses: 'Olympic lifts (clean & jerk, snatch), deadlifts, squats, bench press, rows, and powerlifting movements.'
        },
        {
            name: 'Battle Ropes & Functional Equipment',
            image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
            description: 'Dynamic training tools for functional fitness',
            benefits: [
                'High-intensity calorie burn',
                'Improve cardiovascular fitness',
                'Build core stability',
                'Increase grip strength',
                'Full-body conditioning'
            ],
            uses: 'HIIT workouts, circuit training, endurance building, and explosive power development.'
        },
        {
            name: 'Benches & Lifting Platforms',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
            description: 'Adjustable benches and rubber lifting platforms',
            benefits: [
                'Versatile exercise options',
                'Safe heavy lifting surface',
                'Adjustable angles for targeting',
                'Professional-grade stability',
                'Protect floors and equipment'
            ],
            uses: 'Bench press, incline/decline movements, Olympic lifts, and countless dumbbell exercises.'
        },
        {
            name: 'Resistance Bands & Mobility Tools',
            image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
            description: 'Recovery and flexibility enhancement equipment',
            benefits: [
                'Improve flexibility and mobility',
                'Aid muscle recovery',
                'Prevent injuries',
                'Enhance performance',
                'Portable and versatile'
            ],
            uses: 'Stretching, mobility work, warm-ups, cool-downs, rehabilitation, and assisted strength training.'
        }
    ];

    return (
        <>
            <Navbar />

            {/* Page Header */}
            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <div className="page-header-content">
                        <h1 className="page-title">World-Class Facilities</h1>
                        <p className="page-subtitle">
                            Step into a premium fitness environment equipped with state-of-the-art machines and equipment designed to help you achieve your goals faster and safer.
                        </p>
                    </div>
                </div>
            </section>

            {/* Equipment Showcase */}
            <section style={{ padding: '5rem 0', background: '#0a0a0a' }}>
                <style>{`
                    @media (max-width: 768px) {
                        .equipment-grid-item {
                            grid-template-columns: 1fr !important;
                            padding: 2rem 1.5rem !important;
                            gap: 2rem !important;
                        }
                        .equipment-grid-item > div {
                            order: 2 !important;
                        }
                        .equipment-grid-item img {
                            height: 250px !important;
                        }
                        .equipment-title {
                            font-size: 1.8rem !important;
                        }
                    }
                `}</style>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#fff', marginBottom: '1rem' }}>
                            Premium Equipment & Their Benefits
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#999', maxWidth: '800px', margin: '0 auto' }}>
                            Discover our comprehensive range of professional-grade equipment, each carefully selected to maximize your results
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '3rem' }}>
                        {equipment.map((item, index) => (
                            <div
                                key={index}
                                className="equipment-grid-item"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '3rem',
                                    alignItems: 'center',
                                    background: 'linear-gradient(135deg, #1a1a1a, #0f0f0f)',
                                    padding: '3rem',
                                    borderRadius: '20px',
                                    border: '1px solid rgba(255,0,51,0.2)'
                                }}
                            >
                                <div style={{ order: index % 2 === 0 ? 1 : 2 }}>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                            width: '100%',
                                            height: '400px',
                                            objectFit: 'cover',
                                            borderRadius: '15px',
                                            boxShadow: '0 10px 40px rgba(255,0,51,0.3)'
                                        }}
                                    />
                                </div>

                                <div style={{ order: index % 2 === 0 ? 2 : 1 }}>
                                    <h3 className="equipment-title" style={{
                                        fontSize: '2.2rem',
                                        fontWeight: '900',
                                        color: '#ff0033',
                                        marginBottom: '1rem'
                                    }}>
                                        {item.name}
                                    </h3>
                                    <p style={{
                                        fontSize: '1.1rem',
                                        color: '#999',
                                        marginBottom: '2rem',
                                        fontStyle: 'italic'
                                    }}>
                                        {item.description}
                                    </p>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700' }}>
                                            💪 Benefits:
                                        </h4>
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            {item.benefits.map((benefit, i) => (
                                                <li
                                                    key={i}
                                                    style={{
                                                        color: '#ccc',
                                                        marginBottom: '0.8rem',
                                                        paddingLeft: '1.5rem',
                                                        position: 'relative'
                                                    }}
                                                >
                                                    <span style={{
                                                        position: 'absolute',
                                                        left: 0,
                                                        color: '#00d4ff'
                                                    }}>✓</span>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '1rem', fontWeight: '700' }}>
                                            🎯 Perfect For:
                                        </h4>
                                        <p style={{ color: '#a0e7ff', lineHeight: '1.8', fontSize: '1.05rem' }}>
                                            {item.uses}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facility Features */}
            <section style={{ padding: '5rem 0', background: '#f5f5f5' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#0a0a0a', marginBottom: '1rem' }}>
                            Additional Amenities
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {[
                            {
                                icon: '🚿',
                                title: 'Premium Locker Rooms',
                                description: 'Spacious changing facilities with secure lockers, hot showers, and grooming stations'
                            },
                            {
                                icon: '❄️',
                                title: 'Climate Controlled',
                                description: 'Advanced HVAC system maintaining perfect temperature year-round for optimal training'
                            },
                            {
                                icon: '💧',
                                title: 'Hydration Stations',
                                description: 'Filtered water fountains and refill stations throughout the facility'
                            },
                            {
                                icon: '🎵',
                                title: 'Motivational Sound System',
                                description: 'Premium audio setup with energizing playlists to fuel your workouts'
                            },
                            {
                                icon: '📱',
                                title: 'Wi-Fi & Charging',
                                description: 'High-speed internet and charging stations for your convenience'
                            },
                            {
                                icon: '🏆',
                                title: 'Achievement Wall',
                                description: 'Celebrate member milestones and personal records with our community board'
                            }
                        ].map((amenity, index) => (
                            <div
                                key={index}
                                style={{
                                    background: '#fff',
                                    padding: '2.5rem',
                                    borderRadius: '15px',
                                    textAlign: 'center',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{amenity.icon}</div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0a0a0a', marginBottom: '1rem' }}>
                                    {amenity.title}
                                </h3>
                                <p style={{ color: '#666', lineHeight: '1.7' }}>
                                    {amenity.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Experience Our Facilities First-Hand</h2>
                        <p className="cta-text">
                            Schedule a free facility tour and see why Atlas Fitness Elite is the premier choice for serious athletes and fitness enthusiasts.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Book a Facility Tour
                            </Link>
                            <Link to="/membership" className="btn btn-secondary btn-large">
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

export default Facilities;
