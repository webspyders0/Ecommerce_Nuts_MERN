import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import LandingAbout from '../../components/LandingAbout';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatWidget from '../../components/ChatWidget';
import backgroundImage from '../../assets/images/nutso3.png';
import bannerImg from '../../assets/images/bannerImg.webp';
import almondImg from '../../assets/images/almond.jpeg';
import cashewImg from '../../assets/images/cashew.jpeg';
import pistaImg from '../../assets/images/pista.jpeg';
import walnutImg from '../../assets/images/walnut.jpeg';
import amlaImg from '../../assets/images/amlahoney.jpeg';
import strawImg from '../../assets/images/driedstraw.jpeg';
import pineImg from '../../assets/images/driedpine.jpeg';
import HomeCarousel from '../../components/HomeCarousel';



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
                   <HomeCarousel/>

                    {/* NUTTY Delicacies Section */}
                    <section style={{ padding: '40px 20px' }}>
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <h2 style={{
                                fontSize: '32px',
                                marginBottom: '30px',
                                textAlign: 'center',
                                color: '#102C57',
                                fontWeight: 'bold',
                                position: 'relative',
                                display: 'inline-block'
                            }}>
                                NUTTY DELICACIES
                                <span style={{
                                    content: '',
                                    position: 'absolute',
                                    bottom: '-5px', // Adjust the distance from the text
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '50%', // Adjust for how much of the text width you want
                                    height: '1px',
                                    backgroundColor: '#333',
                                }} />
                            </h2>
                            <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                                {[
                                    {
                                        name: 'Premium Dates',
                                        price: (Math.random() * 500 + 200).toFixed(2),
                                        image: walnutImg,
                                    },
                                    {
                                        name: 'Pure Kashmiri Cashew',
                                        price: (Math.random() * 500 + 200).toFixed(2),
                                        image: cashewImg,
                                    },
                                    {
                                        name: 'Haze Almond Hazelnuts',
                                        price: (Math.random() * 500 + 200).toFixed(2),
                                        image: almondImg,
                                    },
                                    {
                                        name: 'Pista Seeds',
                                        price: (Math.random() * 500 + 200).toFixed(2),
                                        image: pistaImg,
                                    },
                                    {
                                        name: 'Coated Amla',
                                        price: (Math.random() * 500 + 200).toFixed(2),
                                        image: amlaImg,
                                    },
                                    {
                                        name: 'Mixed Powder',
                                        price: (Math.random() * 500 + 200).toFixed(2),
                                        image: pineImg,
                                    },
                                    {
                                        name: 'Haze Almond Hazelnuts',
                                        price: (Math.random() * 500 + 200).toFixed(2),
                                        image: almondImg,
                                    },
                                    {
                                        name: 'Pista Seeds',
                                        price: (Math.random() * 500 + 200).toFixed(2),
                                        image: strawImg,
                                    },
                                ].map((product, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                                    >
                                        {/* Product Image */}
                                        <div className="relative w-full pt-[75%] bg-gray-100 border-b-2 border-[#D4AF37]">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="absolute top-0 left-0 w-full h-full object-cover transition-transform transform hover:scale-110"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="flex flex-1 flex-col justify-between p-4 bg-[#FDF8E7] border-b-4 border-[#D4AF37] text-center">
                                            <h3 className="text-lg  text-gray-500 mb-2">{product.name}</h3>
                                            <p className="text-base font-semibold text-[#102C57] font-premium">
                                                From Rs. {product.price}
                                            </p>

                                        </div>

                                        {/* Gold Band Below */}
                                        <div className="bg-[#D4AF37] rounded-b-sm md:rounded-b-lg h-[2px] md:h-[8px]" />

                                    </div>
                                ))}
                            </div>


                            <div className="text-center mt-10">
                                <button
                                    className="px-8 py-3 rounded-full border-none cursor-pointer bg-[#D4AF37] text-white text-base font-bold shadow-lg transition-all duration-300 hover:bg-[#b08c2f] hover:scale-105"
                                >
                                    View All
                                </button>
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


            </div>
        </>
    );
};

export default HomePage;