import React, { useState, useEffect, useRef } from 'react';
import IconButtons from './IconButtons';
import { Helmet } from 'react-helmet';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navbarRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation(); // Use location to get current path

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (navbarRef.current) {
                setNavbarHeight(navbarRef.current.offsetHeight);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setIsNavbarVisible(false);
            } else {
                setIsNavbarVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT US', path: '/about' },
        { name: 'PRODUCTS', path: '/products' },
        { name: 'BEST DEALS', path: '/best-deals' },
        { name: 'GIFTINGS', path: '/giftings' },
        { name: 'CONTACT US', path: '/contact' }
    ];

    const handleNavItemClick = (path) => {
        navigate(path);
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Nutty | Fresh DryFruits & Nuts</title>
            </Helmet>

            <header
                ref={navbarRef}
                style={{
                    backgroundColor: 'white',
                    padding: '10px 20px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease',
                    transform: isNavbarVisible ? 'translateY(0)' : `translateY(-${navbarHeight}px)`,
                    position: 'fixed',
                    width: '100%',
                    top: 0,
                    zIndex: 1000,
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="#D4AF37">
                            <path d="M20 1L1 10L20 19L39 10L20 1ZM1 30L20 39L39 30V10L20 19L1 10V30Z" />
                        </svg>
                        <span style={{ marginLeft: '10px', fontSize: '24px', fontWeight: 'bold' }}>NUTTY.</span>
                    </div>
                    {!isMobile && (
                        <nav>
                            <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <button
                                            onClick={() => handleNavItemClick(item.path)}
                                            style={{
                                                color: '#8B4513',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                                borderBottom: location.pathname === item.path ? '2px solid #D4AF37' : 'none' // Add border if active
                                            }}>
                                            {item.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <IconButtons />
                        {isMobile && (
                            <button onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Toggle menu">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B4513" strokeWidth="2">
                                    <path d="M3 12h18M3 6h18M3 18h18" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>
            </header>

            <div style={{ marginTop: `${navbarHeight}px` }}></div>

            {isMobile && isMenuOpen && (
                <nav style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    zIndex: 1000,
                    overflowY: 'auto',
                    padding: '20px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="#D4AF37">
                            <path d="M20 1L1 10L20 19L39 10L20 1ZM1 30L20 39L39 30V10L20 19L1 10V30Z" />
                        </svg>
                        <button onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Close menu">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B4513" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {navItems.map((item) => (
                        <div key={item.name} style={{ marginBottom: '15px' }}>
                            <button
                                onClick={() => handleNavItemClick(item.path)}
                                style={{
                                    color: '#8B4513',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '18px',
                                    borderBottom: location.pathname === item.path ? '2px solid #D4AF37' : 'none' // Active style for mobile menu
                                }}>
                                {item.name}
                            </button>
                        </div>
                    ))}
                </nav>
            )}
        </>
    );
};

export default Navbar;


