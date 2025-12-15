import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Programs = () => {
    const [expandedClass, setExpandedClass] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fitnessClasses = [
        {
            id: 'calisthenics',
            title: 'Calisthenics',
            description: 'Take control of your body and build strength with calisthenics training – the art of movement using just your body weight. Whether you\'re a beginner or a pro, our calisthenics classes will help you with both strength and mobility training at the right level.',
            fullContent: 'Master bodyweight exercises including pull-ups, push-ups, dips, muscle-ups, and advanced progressions. Our expert coaches guide you through proper form and progressive overload techniques.',
            image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800'
        },
        {
            id: 'parkour',
            title: 'Parkour',
            description: 'Perfect for urban fitness enthusiasts, our expert parkour training helps you unleash the strength within. With our parkour classes, you\'ll learn how to move creatively and efficiently, enhancing your agility, balance, and mental sharpness.',
            fullContent: 'Learn vaulting, precision jumps, wall runs, and flowing movement sequences. Build confidence in navigating obstacles and develop functional strength.',
            image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800'
        },
        {
            id: 'hyrox',
            title: 'Hyrox',
            description: 'Train smarter for functional strength challenges with our Hyrox classes. Whether preparing to compete or just pushing your limits, our sessions are designed to build your endurance fitness and provide functional strength training in a supportive environment.',
            fullContent: 'Prepare for the ultimate fitness race combining running and functional workouts. Train with SkiErg, sled push/pull, burpees, rowing, and more.',
            image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800'
        },
        {
            id: 'strength',
            title: 'Strength & Conditioning',
            description: 'Build muscle, boost endurance, and elevate your athletic performance with our personalized strength training and conditioning workouts. From increasing strength to improving overall fitness, our programs are tailored to your pace and designed to help you unlock your potential.',
            fullContent: 'Olympic lifts, powerlifting, hypertrophy training, and metabolic conditioning. Progressive programming with regular assessments and personalized adjustments.',
            image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800'
        },
        {
            id: 'ocr',
            title: 'OCR (Obstacle Course Racing)',
            description: 'Get ready to conquer any challenge with our expert OCR training! Our endurance obstacle training combines strength, stamina, and technique to help you dominate tough courses and boost your resilience at your pace.',
            fullContent: 'Train for Spartan Race, Tough Mudder, and similar events. Master rope climbs, cargo nets, wall climbs, and endurance running.',
            image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800'
        },
        {
            id: 'flexibility',
            title: 'Flexibility',
            description: 'Move better, feel better. Our flexibility training sessions help improve your range of motion, lower your injury risk, and boost overall performance. Get loose and level up with our stretching exercises and mobility classes.',
            fullContent: 'Dynamic and static stretching, yoga-inspired flows, foam rolling techniques, and mobility drills for improved performance and recovery.',
            image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800'
        },
        {
            id: 'inversions',
            title: 'Inversions',
            description: 'Turn your fitness routine upside down! Our inversion training builds serious core strength and improves your balance while adding a fun, challenging twist to your workouts. It\'s perfect for anyone ready to dive into advanced calisthenics.',
            fullContent: 'Handstands, headstands, forearm stands, and advanced progressions. Build shoulder strength and body awareness through controlled inversions.',
            image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800'
        },
        {
            id: 'tumbling',
            title: 'Tumbling',
            description: 'Master dynamic movement with our tumbling classes. Perfect for all ages, our sessions help improve your coordination, balance, and body awareness through acrobatic fitness and gymnastics training with the help of experts.',
            fullContent: 'Rolls, cartwheels, handsprings, and aerial skills. Safe progression with proper spotting and technique coaching.',
            image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800'
        },
        {
            id: 'kids-parkour',
            title: 'Kids Parkour',
            description: 'Give your child the gift of movement with our kids parkour classes. Designed for kids of all levels of fitness. These children fitness classes focus on building motor skills, confidence, and youth agility training. And all this happens in a safe environment.',
            fullContent: 'Age-appropriate parkour fundamentals, games, obstacle courses, and movement challenges. Build confidence and physical literacy in a fun, safe setting.',
            image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800'
        }
    ];

    return (
        <>
            <Navbar />

            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <div className="page-header-content">
                        <h1 className="page-title">Our Fitness Classes</h1>
                        <p className="page-subtitle">
                            We believe fitness should be exciting, challenging, and rewarding. Whatever your goal is, our fitness classes will help you boost strength, agility, and confidence. Start with any of our expertly designed programs and discover a new way to live fit.
                        </p>
                    </div>
                </div>
            </section>

            <section className="programs-section" style={{ background: '#0a0a0a', padding: '5rem 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem'
                    }}>
                        {fitnessClasses.map((classItem) => (
                            <div
                                key={classItem.id}
                                style={{
                                    background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url(${classItem.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '16px',
                                    padding: '2.5rem',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderLeft: '4px solid #00d4ff',
                                    minHeight: expandedClass === classItem.id ? 'auto' : '400px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    transition: 'all 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.borderColor = '#00d4ff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                }}
                            >
                                <div>
                                    <h3 style={{
                                        fontSize: '2rem',
                                        fontWeight: '900',
                                        color: '#fff',
                                        marginBottom: '1.5rem',
                                        fontStyle: 'italic'
                                    }}>
                                        {classItem.title}
                                    </h3>
                                    <p style={{
                                        color: '#ccc',
                                        lineHeight: '1.8',
                                        marginBottom: '1.5rem'
                                    }}>
                                        {classItem.description}
                                    </p>

                                    {expandedClass === classItem.id && (
                                        <p style={{
                                            color: '#a0e7ff',
                                            lineHeight: '1.8',
                                            marginBottom: '1.5rem',
                                            borderTop: '1px solid rgba(0, 212, 255, 0.3)',
                                            paddingTop: '1rem'
                                        }}>
                                            {classItem.fullContent}
                                        </p>
                                    )}
                                </div>

                                <button
                                    onClick={() => setExpandedClass(expandedClass === classItem.id ? null : classItem.id)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#00d4ff',
                                        fontWeight: '700',
                                        fontSize: '1rem',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '0',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.gap = '15px';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.gap = '8px';
                                    }}
                                >
                                    {expandedClass === classItem.id ? 'Show Less' : 'Know More'} →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Free Trial Booking Section */}
            <section style={{
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                padding: '5rem 0'
            }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <p style={{
                            color: '#00d4ff',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            letterSpacing: '3px',
                            marginBottom: '1rem'
                        }}>
                            TRY US OUT BEFORE SIGNING UP!
                        </p>
                        <h2 style={{
                            fontSize: '3rem',
                            fontWeight: '900',
                            color: '#fff',
                            marginBottom: '0.5rem'
                        }}>
                            Book your <span style={{ color: '#00d4ff' }}>FREE</span> trial class now!
                        </h2>
                    </div>

                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        background: 'rgba(26, 26, 26, 0.6)',
                        padding: '3rem',
                        borderRadius: '20px',
                        border: '1px solid rgba(0, 212, 255, 0.2)'
                    }}>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);

                            // Format message for WhatsApp
                            const message = `*FREE TRIAL CLASS BOOKING*%0A%0A` +
                                `*Name:* ${formData.get('firstName')} ${formData.get('lastName')}%0A` +
                                `*Phone:* ${formData.get('phone')}%0A` +
                                `*Email:* ${formData.get('email')}%0A` +
                                `*Class Selected:* ${formData.get('classType')}%0A%0A` +
                                `I would like to book a FREE trial class!`;

                            // Open WhatsApp with pre-filled message
                            window.open(`https://wa.me/447944295352?text=${message}`, '_blank');

                            // Reset form
                            e.target.reset();
                        }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '1.5rem'
                            }}>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    required
                                    style={{
                                        padding: '1.2rem 1.5rem',
                                        borderRadius: '50px',
                                        border: 'none',
                                        background: '#fff',
                                        fontSize: '1rem'
                                    }}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    required
                                    style={{
                                        padding: '1.2rem 1.5rem',
                                        borderRadius: '50px',
                                        border: 'none',
                                        background: '#fff',
                                        fontSize: '1rem'
                                    }}
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    required
                                    style={{
                                        padding: '1.2rem 1.5rem',
                                        borderRadius: '50px',
                                        border: 'none',
                                        background: '#fff',
                                        fontSize: '1rem'
                                    }}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    required
                                    style={{
                                        padding: '1.2rem 1.5rem',
                                        borderRadius: '50px',
                                        border: 'none',
                                        background: '#fff',
                                        fontSize: '1rem'
                                    }}
                                />
                            </div>

                            <div style={{ marginTop: '1.5rem' }}>
                                <select
                                    name="classType"
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '1.2rem 1.5rem',
                                        borderRadius: '50px',
                                        border: 'none',
                                        background: '#fff',
                                        fontSize: '1rem',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <option value="">Select a class</option>
                                    {fitnessClasses.map(cls => (
                                        <option key={cls.id} value={cls.title}>{cls.title}</option>
                                    ))}
                                </select>
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                                <button
                                    type="submit"
                                    style={{
                                        padding: '1.2rem 4rem',
                                        borderRadius: '50px',
                                        border: 'none',
                                        background: 'linear-gradient(135deg, #00d4ff, #0099cc)',
                                        color: '#0a0a0a',
                                        fontSize: '1rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 4px 20px rgba(0, 212, 255, 0.4)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 212, 255, 0.6)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.4)';
                                    }}
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Your Fitness Journey?</h2>
                        <p className="cta-text">
                            Join any of our expertly designed fitness classes and discover a new way to achieve your goals. Our trainers are here to support you every step of the way.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Book a Free Class
                            </Link>
                            <Link to="/membership" className="btn btn-outline btn-large">
                                View Membership Options
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Programs;
