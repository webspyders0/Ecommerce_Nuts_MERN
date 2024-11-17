import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import LandingAbout from '../../components/LandingAbout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatWidget from '../../components/ChatWidget';
import backgroundImage from '../../assets/images/nutso3.png'; 

const HomePage = () => {

    const styles = {
        container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' },
        button: { padding: '10px 20px', borderRadius: '25px', border: 'none', cursor: 'pointer' },
        section: { padding: '40px 0' },
        gridContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' },
    };


    return (
        <>
            <Helmet>
                <title>Nutty | Fresh DryFruits & Nuts</title>
            </Helmet>

            <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#FDF8E7', color: '#8B4513', minHeight: '100vh' }}>
                {/* Header */}
                <Navbar />

                {/* Main Content */}
                <main className='pt-20'
                    style={{
                        minHeight: '100vh',
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'auto',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat',
                        
                    }}
                    >
                    {/* Hero Section */}
                    <section
                        //  className='bg-amber-800'
                        style={{
                            background: 'linear-gradient(to right, #C71585, #FFD700)',
                            color: 'white',
                            padding: '60px 0'
                        }}>
                        <div style={styles.container}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <div style={{ flex: 1 }}>
                                    <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>PREMIUM CUSTOMISED GIFT HAMPERS</h1>
                                    <p style={{ fontSize: '18px', marginBottom: '30px' }}>Discover our exquisite collection of dry fruits and nuts</p>
                                    <button style={{ ...styles.button, backgroundColor: 'white', color: '#8B4513' }}>Shop Now</button>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ backgroundColor: '#E0E0E0', width: '100%', paddingTop: '75%', position: 'relative' }}>
                                        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Gift Hamper Image</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* NUTTY Delicacies Section */}
                    <section style={{ padding: '40px 20px' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>NUTTY DELICACIES</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                {['NUTTY Dates Milkshake', 'Pure Kashmiri Shilajit', 'Haze Cream With Hazelnuts', 'Ajwa Seed Powder'].map((product, index) => (
                                    <div key={index} style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        <div style={{ backgroundColor: '#E0E0E0', paddingTop: '75%', position: 'relative' }}>
                                            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Product Image</span>
                                        </div>
                                        <div style={{ padding: '15px' }}>
                                            <h3 style={{ marginBottom: '10px' }}>{product}</h3>
                                            <p>Rs. {(Math.random() * 500 + 200).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                <button style={{ padding: '10px 20px', borderRadius: '25px', border: 'none', cursor: 'pointer', backgroundColor: '#D4AF37', color: 'white' }}>View All</button>
                            </div>
                        </div>
                    </section>

                    {/* About NUTTY Section */}
                    <LandingAbout />

                    {/* Featured Collection */}
                    <section style={{ padding: '40px 20px' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>FEATURED COLLECTION</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                {['Khudri Dates Stuffed With Cashew', 'Khudri Dates Stuffed With Hazelnut', 'Khudri Dates Stuffed With Pistachio', 'Muneeli Dates Stuffed With Cashew'].map((product, index) => (
                                    <div key={index} style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                        <div style={{ backgroundColor: '#E0E0E0', paddingTop: '75%', position: 'relative' }}>
                                            <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Product Image</span>
                                        </div>
                                        <div style={{ padding: '15px' }}>
                                            <h3 style={{ marginBottom: '10px' }}>{product}</h3>
                                            <p>Rs. {(Math.random() * 500 + 400).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                <button style={{ padding: '10px 20px', borderRadius: '25px', border: 'none', cursor: 'pointer', backgroundColor: '#D4AF37', color: 'white' }}>View All</button>
                            </div>
                        </div>
                    </section>

                    {/* Storage Tips Section */}
                    <section style={{ backgroundColor: '#FFF8DC', padding: '40px 20px' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>STORING YOUR FAVOURITE DATES, DRY FRUITS AND NUTS!</h2>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li>For immediate usage, store these products in airtight containers at cool, dark spot reducing the exposure of light, oxygen and moisture.</li>
                                <li>Do not expose to heat as it may go rancid or create grounds for soft bodied animals.</li>
                                <li>For longer use, keep it refrigerated giving it the right taste and more flavourful vibrant to these tasteful Products.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Instagram Feed */}
                    <section style={{ padding: '40px 20px' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>INSTAGRAM FEED</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                                {[...Array(6)].map((_, index) => (
                                    <div key={index} style={{ backgroundColor: '#E0E0E0', paddingTop: '100%', position: 'relative' }}>
                                        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Instagram Post {index + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <Footer />

                {/* Fixed elements */}
                <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <ChatWidget />
                </div>

                {/* Free shipping banner */}
                {/* <div className="fixed bottom-0 left-0 right-0 bg-amber-500 text-white py-2 text-center"
                    style={{
                        zIndex: '1', // Lower z-index for the banner
                    }}>
                    <p>Discover the secret to ultimate freshness – only at Nutty.</p>
                </div> */}

            </div>
        </>
    );
};

export default HomePage;