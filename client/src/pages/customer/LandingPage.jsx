import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import LandingAbout from '../../components/home/LandingAbout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatWidget from '../../components/ChatWidget';
import backgroundImage from '../../assets/images/nutso3.png';
import HomeCarousel from '../../components/HomeCarousel';
import SwiperPage from '../../components/home/SwiperPage';
import FeaturedCollections from '../../components/home/FeaturedCollections';



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
                    {/* Hero Section carousel */}
                    <HomeCarousel />

                    {/* NUTTY Delicacies Section */}
                    <section style={{ padding: '40px 20px' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <SwiperPage />
                        </div>
                    </section>



                    {/* About NUTTY Section */}
                    <LandingAbout />

                    {/* Featured Collection */}
                    <section style={{ padding: '40px 20px' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <FeaturedCollections/>
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


            </div>
        </>
    );
};

export default HomePage;