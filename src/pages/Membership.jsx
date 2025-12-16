import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Membership = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pricingPlans = [
        {
            duration: '1 Month',
            price: '₹2,999',
            gst: '+ GST',
            features: ['Access to all equipment', 'Group classes included', 'Locker facilities', 'Free fitness assessment'],
        },
        {
            duration: '2 Months',
            price: '₹5,499',
            gst: '+ GST',
            features: ['Everything in 1 Month', 'Group classes included', 'Locker facilities', 'Priority class booking'],
        },
        {
            duration: '3 Months',
            price: '₹8,599',
            gst: '+ GST',
            features: ['Everything in 2 Months', '1 personal training session', 'Nutrition guidance basics', 'Body composition analysis'],
        },
        {
            duration: '4 Months',
            price: '₹9,999',
            gst: '+ GST',
            features: ['Everything in 3 Months', '2 personal training sessions', 'Detailed meal plans', 'Guest pass (1 entry)'],
        },
        {
            duration: '5 Months',
            price: '₹12,599',
            gst: '+ GST',
            features: ['Everything in 4 Months', '3 personal training sessions', 'Monthly nutrition check-ins', 'Guest pass (2 entries)'],
        },
        {
            duration: '6 Months',
            price: '₹14,999',
            gst: '+ GST',
            featured: true,
            features: ['Everything in 5 Months', '4 personal training sessions', 'Detailed meal plans', 'Body composition analysis', 'Guest pass (3 entries)'],
        },
        {
            duration: '8 Months',
            price: '₹21,000',
            gst: '+ GST',
            features: ['Everything in 6 Months', '5 personal training sessions', 'Monthly nutrition check-ins', 'Guest pass (4 entries)', 'Transfer/freeze option'],
        },
        {
            duration: '10 Months',
            price: '₹25,599',
            gst: '+ GST',
            features: ['Everything in 8 Months', '6 personal training sessions', 'Bi-weekly nutrition check-ins', 'Free merchandise', 'Guest pass (5 entries)'],
        },
        {
            duration: '12 Months',
            price: '₹28,999',
            gst: '+ GST',
            features: ['Everything in 10 Months', '8 personal training sessions', 'Monthly nutrition check-ins', 'Free merchandise', 'Transfer/freeze option (1 month)', 'Guest pass (6 entries)'],
        },
        {
            duration: '15 Months',
            price: '₹34,999',
            gst: '+ GST',
            features: ['Everything in 12 Months', '10 personal training sessions', 'Bi-weekly nutrition support', 'Premium merchandise', 'Transfer/freeze option (2 months)', 'Guest pass (8 entries)'],
        },
        {
            duration: '18 Months',
            price: '₹39,999',
            gst: '+ GST',
            features: ['Everything in 15 Months', '12 personal training sessions', 'Weekly nutrition support', 'Premium merchandise', 'Transfer/freeze option (2 months)', 'Guest pass (10 entries)'],
        },
        {
            duration: '24 Months',
            price: '₹55,999',
            gst: '+ GST',
            features: ['Everything in 18 Months', '16 personal training sessions', 'Dedicated nutrition coach', 'Premium merchandise kit', 'Transfer/freeze option (3 months)', 'Unlimited guest passes', 'VIP member benefits'],
        },
    ];

    return (
        <>
            <Navbar />

            <section className="page-header">
                <div className="page-header-overlay"></div>
                <div className="container">
                    <div className="page-header-content">
                        <h1 className="page-title">Membership Plans</h1>
                        <p className="page-subtitle">Find a Plan That Fits Your Lifestyle</p>
                    </div>
                </div>
            </section>

            <section className="pricing-intro">
                <div className="container">
                    <p>
                        No matter your goals or budget, Atlas Fitness Elite offers flexible membership options.
                        From single months to annual commitments, and specialized plans for students, couples,
                        and corporate groups—we've got you covered.
                    </p>
                </div>
            </section>

            <section className="pricing-section">
                <div className="container">
                    <div className="pricing-grid">
                        {pricingPlans.map((plan, index) => (
                            <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                                <div className="pricing-header">
                                    <h3 className="pricing-duration">{plan.duration}</h3>
                                    <div className="pricing-amount">
                                        {plan.price} {plan.price !== 'Custom' && plan.gst && <span style={{ fontSize: '0.9rem', fontWeight: '600' }}> {plan.gst}</span>}
                                    </div>
                                    {!plan.gst && plan.discount && <p className="pricing-gst">{plan.discount}</p>}
                                </div>
                                <ul className="pricing-features">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                                    {plan.price === 'Custom' ? 'Contact Us' : 'Choose Plan'}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="addons-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Add-Ons & Services</h2>
                        <p className="section-subtitle">Enhance Your Membership</p>
                    </div>

                    <div className="addons-grid">
                        <div className="addon-card">
                            <div className="addon-icon">🥗</div>
                            <h3 className="addon-name">Nutrition Consult</h3>
                            <p className="addon-description">
                                Personalized meal plans and dietary guidance - ₹3,999/month,
                                Specialized nutritionist consultation,personalized meal plans and dietary guidance
                            </p>
                        </div>

                        <div className="addon-card">
                            <div className="addon-icon">👕</div>
                            <h3 className="addon-name">Merchandise</h3>
                            <p className="addon-description">
                                Branded apparel, shaker bottles, and gym gear available at reception
                            </p>
                        </div>

                        <div className="addon-card">
                            <div className="addon-icon">🎒</div>
                            <h3 className="addon-name">Locker Rental</h3>
                            <p className="addon-description">
                                Secure personal locker for 24/7 access
                            </p>
                        </div>

                        <div className="addon-card">
                            <div className="addon-icon">🧘</div>
                            <h3 className="addon-name">Specialized Classes</h3>
                            <p className="addon-description">
                                Exclusive workshops, masterclasses, and guest instructor sessions
                            </p>
                        </div>

                        <div className="addon-card">
                            <div className="addon-icon">🏆</div>
                            <h3 className="addon-name">Transformation Challenge</h3>
                            <p className="addon-description">
                                8-week intensive program with coaching, tracking.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Get Started?</h2>
                        <p className="cta-text">
                            Join Atlas Fitness Elite today and unlock your potential. All memberships include
                            unlimited access to group classes, state-of-the-art equipment, and our supportive
                            community. No hidden fees, just results.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-large">
                                Join Now
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large">
                                Book Free Trial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Membership;
