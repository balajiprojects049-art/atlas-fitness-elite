// WhatsApp Floating Button Component
const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/919988229441?text=Hi!%20I%27m%20interested%20in%20joining%20Atlas%20Fitness%20Elite"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 5px 20px rgba(37, 211, 102, 0.4)',
                zIndex: 9999,
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                animation: 'pulse 2s infinite'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.6)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(37, 211, 102, 0.4)';
            }}
        >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="white">
                <path d="M16 0C7.164 0 0 7.164 0 16c0 2.825.738 5.574 2.137 7.992L0 32l8.24-2.089A15.936 15.936 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm8.265 22.806c-.35.981-2.059 1.818-2.831 1.937-.748.116-1.715.164-2.767-.175-0.637-.205-1.456-.478-2.506-.935-4.396-1.918-7.254-6.378-7.475-6.674-.216-.296-1.805-2.383-1.805-4.542 0-2.16 1.151-3.219 1.554-3.657.404-.438.879-.548 1.17-.548.291 0 .586.005.843.015.276.011.632-.088 1.015.761.395.875 1.35 3.265 1.468 3.504.118.238.197.516.04.813-.157.296-.237.481-.473.738-.237.258-.497.575-.711.772-.237.218-.484.455-.208.894.275.439 1.227 2.002 2.634 3.242 1.81 1.595 3.336 2.088 3.809 2.323.473.235.749.197 1.024-.118.275-.315 1.178-1.361 1.493-1.832.315-.471.631-.393 1.063-.235s2.714 1.272 3.185 1.503c.471.231.787.347.905.542.118.196.118 1.128-.232 2.214z" />
            </svg>
            <style>{`
                @keyframes pulse {
                    0% {
                        box-shadow: 0 5px 20px rgba(37, 211, 102, 0.4);
                    }
                    50% {
                        box-shadow: 0 5px 30px rgba(37, 211, 102, 0.7);
                    }
                    100% {
                        box-shadow: 0 5px 20px rgba(37, 211, 102, 0.4);
                    }
                }
            `}</style>
        </a>
    );
};

export default WhatsAppButton;
