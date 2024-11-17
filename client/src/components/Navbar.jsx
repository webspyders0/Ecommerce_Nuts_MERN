import { useState, useEffect, useRef } from 'react';
import { Search, User, ShoppingCart, Heart, ChevronDown, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/nutty.png';
import backgroundImage from '../assets/images/nutso3.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const dropdownRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const isActive = (path) => location.pathname === path;

    const navLinkClass = (path) => `text-black hover:bg-[#FDAA58] hover:text-white px-4 py-1 rounded transition-colors duration-200 ${isActive(path) ? 'bg-[#FDAA58] text-white' : ''}`;

    const productCategories = [
        { title: 'ALL PRODUCTS', href: '/products' },
        { title: 'NUTTY DELICACIES', href: '/products/delicacies' },
        { title: 'DATES', href: '/products/dates' },
        { title: 'NUTS', href: '/products/nuts' },
        { title: 'DRY FRUITS', href: '/products/dry-fruits' },
        { title: 'SEEDS', href: '/products/seeds' },
        { title: 'DRINKS', href: '/products/drinks' },
        { title: 'NATURAL SPICE POWDERS', href: '/products/spices' },
        { title: 'STUFFED DATES', href: '/products/stuffed-dates' },
        { title: 'EXCLUSIVE CONFECTIONERY', href: '/products/confectionery' },
        { title: 'SNACKS', href: '/products/snacks' },
        { title: 'IMPORTED', href: '/products/imported' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div
                className="relative shadow-sm"
                style={{
                    backgroundImage: `linear-gradient(rgba(253, 248, 231, 0.9), rgba(253, 248, 231, 0.9)), url(${backgroundImage})`,
                    backgroundBlendMode: 'overlay',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20 p-0 lg:px-40">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2">
                            <img src={Logo} alt="NUTTY Logo" className="h-8 w-8" />
                            <span className="text-2xl font-bold text-amber-800">NUTTY.</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-2">
                            <Link to="/" className={navLinkClass('/')}>HOME</Link>
                            <Link to="/about" className={navLinkClass('/about')}>ABOUT US</Link>

                            {/* Products Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
                                    className={navLinkClass('/products')}
                                >
                                    PRODUCTS
                                    <ChevronDown className="ml-1 h-4 w-4 inline" />
                                </button>

                                {activeDropdown === 'products' && (
                                    <div className="absolute top-full left-0 w-[600px] bg-white/95 backdrop-blur-sm shadow-lg rounded-lg mt-2 p-6">
                                        <div className="grid grid-cols-2 gap-x-8">
                                            <div className="space-y-4">
                                                {productCategories.map((category) => (
                                                    <Link
                                                        key={category.title}
                                                        to={category.href}
                                                        className="block text-black hover:text-amber-600 transition-colors duration-200"
                                                    >
                                                        {category.title}
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="relative">
                                                <img
                                                    src="/placeholder.svg?height=300&width=300"
                                                    alt="Featured Products"
                                                    className="rounded-lg object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <Link to="/deals" className={navLinkClass('/deals')}>BEST DEALS</Link>

                            {/* Giftings Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === 'giftings' ? null : 'giftings')}
                                    className={navLinkClass('/giftings')}
                                >
                                    GIFTINGS
                                    <ChevronDown className="ml-1 h-4 w-4 inline" />
                                </button>
                            </div>

                            <Link to="/contact-us" className={navLinkClass('/contact-us')}>CONTACT US</Link>
                        </nav>

                        {/* Icons */}
                        <div className="flex items-center space-x-1">

                            <button className="text-black p-2 rounded">
                                <Link to="/search">
                                    <Search className="h-6 w-6" />
                                </Link>
                            </button>

                            <button className="text-black p-2 rounded">
                                <Link to="/login">
                                    <User className="h-6 w-6" />
                                </Link>
                            </button>

                            <button className="text-black p-2 rounded relative">
                                <Link to="/cart">
                                    <ShoppingCart className="h-6 w-6" />
                                    <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        0
                                    </span>
                                </Link>
                            </button>

                            <button className="text-black p-2 rounded relative">
                                <Link to="/wishlist">
                                    <Heart className="h-6 w-6" />
                                    <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        0
                                    </span>
                                </Link>
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden text-black p-2 rounded"
                            >
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden">
                        <div className="flex flex-col px-4 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm">
                            <Link to="/" className={navLinkClass('/')}>HOME</Link>
                            <Link to="/about" className={navLinkClass('/about')}>ABOUT US</Link>
                            <Link to="/products" className={navLinkClass('/products')}>PRODUCTS</Link>
                            <Link to="/deals" className={navLinkClass('/deals')}>BEST DEALS</Link>
                            <Link to="/giftings" className={navLinkClass('/giftings')}>GIFTINGS</Link>
                            <Link to="/contact-us" className={navLinkClass('/contact-us')}>CONTACT US</Link>
                        </div>
                    </div>
                )}

            </div>

            {/* Free Shipping Banner */}
            <div className="bg-amber-500 text-white text-center py-2 text-sm">
                Use Code "FAIZUS" Free shipping for orders over INR1500
            </div>
        </header>
    );
}