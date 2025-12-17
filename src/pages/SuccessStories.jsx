import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SuccessStories = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stories = [
        {
            name: "Akhil",
            image: "/akhil-transformation-hover.jpg",
            subtitle: "98kg to 70kg Transformation",
            quote: "Achieved a pure muscle mass transformation from 98kg to 70kg! The key was a great diet plan and consistent training that completely reshaped my physique.",
            stats: [
                { label: "Lost", value: "28kg" },
                { label: "Muscle Mass", value: "Pure" },
                { label: "Diet Focus", value: "100%" }
            ]
        },
        {
            name: "Manoj",
            image: "/manoj-transformation1.jpg",
            subtitle: "Diamond Physique Transformation",
            quote: "Turned my body into a diamond-like structure through pure dedication and hard work. It's been a very successful story of resilience and pushing limits.",
            stats: [
                { label: "Dedication", value: "100%" },
                { label: "Physique", value: "Elite" },
                { label: "Hard Work", value: "Pixel Perfect" }
            ]
        },
        {
            name: "Rohan",
            image: "/rohan-transformation3.jpg",
            subtitle: "Years of Consistent Focus",
            quote: "Transformed my body through endless years of training. It was all about being consistent, focused, and completely dedicated to this lifestyle.",
            stats: [
                { label: "Mindset", value: "Focus" },
                { label: "Dedication", value: "Elite" },
                { label: "Consistent", value: "100%" }
            ]
        },
        {
            name: "Rajesh Kumar",
            image: "/transformation1.png",
            subtitle: "Lost 25 kg in 6 months",
            quote: "I never thought I could transform my body at 35. The trainers at Atlas Fitness Elite created a personalized plan that fit my lifestyle. The results speak for themselves!",
            stats: [
                { label: "Weight Lost", value: "25kg" },
                { label: "Months", value: "6" },
                { label: "Body Fat", value: "15%" }
            ]
        },
        {
            name: "Priya Sharma",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800",
            subtitle: "Gained 8kg Muscle Mass",
            quote: "From skinny to strong! The strength training program helped me build confidence and muscle. I feel powerful and energized every day!",
            stats: [
                { label: "Muscle Gain", value: "+8kg" },
                { label: "Months", value: "4" },
                { label: "Deadlift PR", value: "45kg" }
            ]
        },
        {
            name: "Arjun Reddy",
            image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800",
            subtitle: "Completed First Marathon",
            quote: "I went from couch potato to marathon runner! The cardio and HIIT programs built my endurance from zero to hero. Couldn't have done it without this amazing team!",
            stats: [
                { label: "Marathon", value: "42km" },
                { label: "Months", value: "5" },
                { label: "Finish Time", value: "3:45" }
            ]
        }
    ];

    return (
        <>
            <Navbar />

            {/* Header */}
            <section style={{
                padding: '8rem 0 4rem',
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
                textAlign: 'center',
                color: '#fff'
            }}>
                <div className="container">
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '900',
                        marginBottom: '1rem',
                        textTransform: 'uppercase'
                    }}>
                        Real People, <span style={{ color: '#ff0033' }}>Real Results</span>
                    </h1>
                    <p style={{
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontSize: '1.2rem',
                        color: '#bbb',
                        lineHeight: '1.8'
                    }}>
                        Every champion started somewhere. Explore the inspiring journeys of our members who pushed their limits and achieved the impossible.
                    </p>
                </div>
            </section>

            {/* Stories Grid */}
            <section style={{ padding: '5rem 0', background: '#f5f5f5' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '3rem'
                    }}>
                        {stories.map((story, index) => (
                            <div key={index} className="success-story-card" style={{
                                background: '#fff',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                transition: 'all 0.3s ease',
                                border: '1px solid #eee'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,0,51,0.2)';
                                    e.currentTarget.style.borderColor = '#ff0033';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                                    e.currentTarget.style.borderColor = '#eee';
                                }}
                            >
                                <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundImage: `url(${story.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'blur(20px) brightness(0.7)',
                                        transform: 'scale(1.1)'
                                    }}></div>
                                    <img
                                        src={story.image}
                                        alt={story.name}
                                        style={{
                                            position: 'relative',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            zIndex: 1
                                        }}
                                    />
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '900', color: '#0a0a0a', marginBottom: '0.25rem' }}>
                                        {story.name}
                                    </h3>
                                    <p style={{ color: '#ff0033', fontSize: '0.9rem', fontWeight: '700', marginBottom: '1rem' }}>
                                        {story.subtitle}
                                    </p>
                                    <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                        "{story.quote}"
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid #eee' }}>
                                        {story.stats.map((stat, idx) => (
                                            <div key={idx} style={{ textAlign: 'center' }}>
                                                <div style={{ fontSize: '1.2rem', fontWeight: '900', color: '#ff0033' }}>{stat.value}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#999' }}>{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Join CTA */}
                    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem' }}>Ready to start your own story?</h2>
                        <Link to="/contact" className="btn btn-primary btn-large">
                            Start Transformation
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default SuccessStories;
