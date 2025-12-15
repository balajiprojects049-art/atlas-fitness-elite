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
            price: '₹3,000',
            features: ['Access to all equipment', 'Group classes included', 'Locker facilities', 'Free fitness assessment'],
        },
        {
            duration: '3 Months',
            price: '₹7,500',
            discount: 'Save ₹1,500',
            features: ['Everything in 1 Month', '1 personal training session', 'Nutrition guidance basics', 'Priority class booking'],
        },
        {
            duration: '6 Months',
            price: '₹13,500',
            discount: 'Save ₹4,500',
            featured: true,
            features: ['Everything in 3 Months', '3 personal training sessions', 'Detailed meal plans', 'Body composition analysis', 'Guest pass (2 entries)'],
        },
        {
            duration: '12 Months',
            price: '₹24,000',
            discount: 'Save ₹12,000',
            features: ['Everything in 6 Months', '6 personal training sessions', 'Monthly nutrition check-ins', 'Free merchandise', 'Transfer/freeze option (1 month)', 'Guest pass (4 entries)'],
        },
        {
            duration: 'Couple - 3 Months',
            price: '₹12,000',
            discount: 'Save ₹3,000',
            features: ['2 memberships included', 'All group classes', 'Shared personal training (2 sessions)', 'Couple workout plans'],
        },
        {
            duration: 'Couple - 6 Months',
            price: '₹22,000',
            discount: 'Save ₹5,000',
            features: ['2 memberships included', 'Shared personal training (4 sessions)', 'Nutrition plans for both', 'Priority support'],
        },
        {
            duration: 'Student (3 Months)',
            price: '₹6,000',
            discount: '20% Off Regular',
            features: ['Valid student ID required', 'All standard amenities', 'Group classes', 'Study-friendly hours'],
        },
        {
            duration: 'Student (6 Months)',
            price: '₹11,000',
            discount: '18% Off Regular',
            features: ['Valid student ID required', 'Everything in 3 months', '2 personal training sessions', 'Flexible freeze policy'],
        },
        {
            duration: 'Corporate (10+ Members)',
            price: 'Custom',
            features: ['Bulk pricing available', 'Customized wellness programs', 'On-site sessions option', 'Health assessment reports', 'Dedicated account manager'],
        },
        {
            duration: 'Senior Citizen (3 Months)',
            price: '₹5,500',
            discount: '25% Off',
            features: ['Age 60+ only', 'Low-impact classes', 'Supervised workouts', 'Joint-friendly equipment'],
        },
        {
            duration: 'Day Pass',
            price: '₹300',
            features: ['Single-day access', 'All equipment', 'Group classes', 'Locker and shower'],
        },
        {
            duration: 'Personal Training (10 Sessions)',
            price: '₹15,000',
            features: ['1-on-1 coaching', 'Customized workout plan', 'Nutrition guidance', 'Progress tracking', 'Flexible scheduling'],
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
                                        {plan.price} {plan.price !== 'Custom' && <span>/total</span>}
                                    </div>
                                    {plan.discount && <p className="pricing-gst">{plan.discount}</p>}
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
                                Personalized meal plans and dietary guidance - ₹2,000/month
                            </p>
                        </div>

                        <div className="addon-card">
                            <div className="addon-icon">📊</div>
                            <h3 className="addon-name">Body Composition Scan</h3>
                            <p className="addon-description">
                                Advanced InBody analysis to track muscle, fat, and hydration - ₹500/scan
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
                                Secure personal locker for 24/7 access - ₹500/month
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
                                8-week intensive program with coaching, tracking, and prizes - ₹8,000
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
