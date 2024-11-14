import { useNavigate } from "react-router-dom";

const IconButtons = () => {
    const navigate = useNavigate();

    // Handler function to navigate based on icon type
    const handleNavigation = (icon) => {
        if (icon === 'user') navigate('/login');
        if (icon === 'cart') navigate('/cart');
        if (icon === 'search') navigate('/search');
    };

    return (
        <div style={{ display: 'flex', gap: '15px' }}>
            {['search', 'user', 'cart'].map((icon) => (
                <button
                    key={icon}
                    onClick={() => handleNavigation(icon)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#8B4513"
                        strokeWidth="2"
                    >
                        {icon === 'search' && (
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" />
                        )}
                        {icon === 'user' && (
                            <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" />
                        )}
                        {icon === 'cart' && (
                            <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" />
                        )}
                    </svg>
                </button>
            ))}
        </div>
    );
};

export default IconButtons;