import React from 'react';
import { Play, Facebook, Instagram, Search, User, ShoppingCart, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatWidget from '../../components/ChatWidget';
import backgroundImage from '../../assets/images/nutso3.png'; 

const AboutPage = () => {
    return (
        <>
            <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#FDF8E7', color: '#8B4513', minHeight: '100vh' }}>
            <Helmet>
                <title>About | Ensure for why you order here</title>
            </Helmet>

            <div className="bg-cream-100 min-h-screen">
                {/* Header */}
                <Navbar />
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
                <section className="relative h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/placeholder.svg?height=400&width=1200")' }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">ABOUT US</h1>
                    </div>
                </section>

                {/* Breadcrumbs */}
                <div className="container mx-auto px-4 py-4">
                    <p className="text-amber-800">Home &gt; About Us</p>
                </div>

                {/* Our Vision Section */}
                <section className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img src="/placeholder.svg?height=400&width=600" alt="Chairman" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-3xl font-bold text-amber-800 mb-6">OUR VISION</h2>
                            <p className="text-lg mb-6">
                                To become the first choice of customer for dates, dry fruits, nuts and
                                other precious items in fruits and vegetables along with imported
                                drinks and wines by bringing the freshest and highest quality to
                                maximum number of customers through our own shops across India.
                                Our priority lies with consistently keeping up our customers by
                                serving them the products without compromising the level of quality.
                            </p>
                            <p className="text-lg font-semibold">
                                Mohammed Kutty Noorikadu<br />
                                Chairman
                            </p>
                        </div>
                    </div>
                </section>

                {/* Watch Our Story Section */}
                <section className="bg-amber-800 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">WATCH OUR STORY</h2>
                        <p className="mb-8 max-w-2xl mx-auto">
                            An exclusive brand that has been in business for more than 10 years,
                            we at NUTTY, just does not want to compromise the quality and the
                            love that we send in each pack of our dry fruits! We kick-started in
                            2013 with the motto of serving the country with the best dry fruits
                            and imported products.
                        </p>
                        <button className="bg-white text-amber-800 rounded-full p-4 hover:bg-amber-100 transition-colors">
                            <Play className="h-8 w-8" />
                        </button>
                    </div>
                </section>

                {/* Nuttiest People Around Section 1 */}
                <section className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <img src="/placeholder.svg?height=400&width=600" alt="Store Interior" className="rounded-lg shadow-lg" />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-3xl font-bold text-amber-800 mb-6">NUTTIEST PEOPLE AROUND</h2>
                            <p className="text-lg mb-6">
                                Varieties of dates, nuts and dry fruits from countries like Iran,
                                Afghanistan, United States of America and Dubai. The best dates that
                                grow in Saudi Arabia are offered to our customers in India. The hand-
                                picked dates are hygienically processed to ensure the best quality.
                                Our exclusive farm fresh yellow dates are a catch for the season!
                            </p>
                            <button className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-amber-600 transition-colors">
                                Check Out The Store Now
                            </button>
                        </div>
                    </div>
                </section>

                {/* Nuttiest People Around Section 2 */}
                <section className="bg-cream-200 py-12">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                                <h2 className="text-3xl font-bold text-amber-800 mb-6">NUTTIEST PEOPLE AROUND</h2>
                                <p className="text-lg mb-6">
                                    At NUTTY, we respect and connect with Mother Nature and earth and
                                    we do not do anything that does not go in sync with nature. Hence,
                                    dry fruits that we grow at our farm are free of pesticides or
                                    insecticides. The cultivation measures that we have been using are
                                    purely organic. There is minimal use of machines and we prefer
                                    using hands for our cultivations. We ensure that each pack of our
                                    dry fruits are hygienic and do not contain any preservative.
                                    Keeping nature intact and saving the environment is our way of
                                    giving back what Mother Nature has given us!
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <img src="/placeholder.svg?height=400&width=600" alt="Nuts in Bowls" className="rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
               <Footer/>

                    {/* Fixed elements */}
                    <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <ChatWidget />
                    </div>

                {/* Free shipping banner */}
                {/* <div className="fixed bottom-0 left-0 right-0 bg-amber-500 text-white py-2 text-center">
                    <p>Only INR620 away from free shipping</p>
                </div> */}
            </main>
            </div>
            </div>
        </>
    );
};

export default AboutPage;