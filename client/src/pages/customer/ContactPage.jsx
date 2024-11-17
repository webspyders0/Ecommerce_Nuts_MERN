
import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import backgroundImage from '../../assets/images/nutso3.png';
import ChatWidget from '../../components/ChatWidget';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showChat, setShowChat] = useState(false)
    const [activeAccordion, setActiveAccordion] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsSubmitting(false)
    }

    const toggleAccordion = (id) => {
        setActiveAccordion(activeAccordion === id ? null : id)
    }

    return (
        <>
            <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#FDF8E7', color: '#8B4513', minHeight: '100vh' }}>
            <div>
                <Navbar />
            </div>
            <div className="min-h-screen bg-transparent pt-20" style={{
                minHeight: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',

            }}>
                {/* Hero Section */}
                <div className="relative h-[300px] md:h-[400px]">
                    <img
                        src="/placeholder.svg?height=400&width=1200"
                        alt="Store Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in-down text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
                            CONTACT US
                        </h1>
                    </div>
                </div>

                {/* Breadcrumb */}
                <div className="container mx-auto px-4 py-2">
                    <div className="text-amber-800">
                        Home / <span className="text-amber-600">Contact Us</span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div className="animate-fade-in-left">
                                <h2 className="text-3xl font-bold text-amber-800 mb-6">Get in Touch</h2>

                                <div className="grid gap-4">
                                    {[
                                        { icon: "🕒", title: "CUSTOMER SERVICE", content: "Monday to Sunday 10:00 AM – 10:00 PM" },
                                        { icon: "📞", title: "PHONE", content: "+91 7034900009" },
                                        { icon: "✉️", title: "EMAIL", content: "customercare@nutty.in" },
                                        { icon: "📍", title: "LOCATION", content: "Bommanahalli, Bengaluru, Karnataka 560068" },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-amber-50/30 backdrop-blur-md rounded-lg shadow-md p-4 flex items-center gap-4 hover:bg-amber-50/40 transition-all">
                                            <div className="bg-amber-500 p-3 rounded-full text-2xl">{item.icon}</div>
                                            <div>
                                                <h3 className="font-semibold text-lg">{item.title}</h3>
                                                <p className="text-gray-600">{item.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div className="animate-fade-in-left">
                                <h3 className="text-2xl font-bold text-amber-800 mb-4">Frequently Asked Questions</h3>
                                <div className="space-y-2">
                                    {[
                                        { id: "faq-1", question: "What are your delivery areas?", answer: "We deliver across India through our network of stores and shipping partners." },
                                        { id: "faq-2", question: "How can I track my order?", answer: "Once your order is shipped, you'll receive a tracking number via email and SMS." },
                                        { id: "faq-3", question: "What's your return policy?", answer: "We accept returns within 7 days of delivery if the product is unopened and in original condition." },
                                    ].map((faq) => (
                                        <div key={faq.id} className="border border-amber-200 rounded-lg bg-amber-50/20 backdrop-blur-md hover:bg-amber-50/30 transition-all">
                                            <button
                                                onClick={() => toggleAccordion(faq.id)}
                                                className="flex justify-between items-center w-full p-3 text-left"
                                                aria-expanded={activeAccordion === faq.id}
                                            >
                                                <span className="font-medium text-amber-900">{faq.question}</span>
                                                <span className="transform transition-transform duration-200">
                                                    {activeAccordion === faq.id ? '▲' : '▼'}
                                                </span>
                                            </button>
                                            {activeAccordion === faq.id && (
                                                <div className="p-3 border-t border-amber-200 bg-amber-50/10">{faq.answer}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="animate-fade-in-right">
                            <div className="bg-amber-50/30 backdrop-blur-md rounded-lg shadow-md p-6 hover:bg-amber-50/40 transition-all">
                                <h2 className="text-3xl font-bold text-amber-800 mb-6">Send Us Your Questions!</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-amber-900">Name*</label>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                required
                                                className="w-full p-2 border border-amber-200 rounded-md bg-amber-50/20 focus:bg-amber-50/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-amber-900">Email*</label>
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                required
                                                className="w-full p-2 border border-amber-200 rounded-md bg-amber-50/20 focus:bg-amber-50/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-amber-900">Phone*</label>
                                        <input
                                            type="tel"
                                            placeholder="Your Phone Number"
                                            required
                                            className="w-full p-2 border border-amber-200 rounded-md bg-amber-50/20 focus:bg-amber-50/40 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-amber-900">Message*</label>
                                        <textarea
                                            placeholder="Your Message"
                                            className="w-full p-2 border border-amber-200 rounded-md bg-amber-50/20 focus:bg-amber-50/40 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-amber-500"
                                            required
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className={`w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-md transition duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                                </svg>
                                                Send Message
                                            </span>
                                        )}
                                    </button>
                                </form>
                            </div>

                            {/* Customer Reviews */}
                            <div className="mt-6">
                                <h3 className="text-xl font-bold text-amber-800 mb-4">What Our Customers Say</h3>
                                <div className="grid gap-4">
                                    {[
                                        {
                                            name: "Priya S.",
                                            rating: 5,
                                            comment: "Amazing quality dates and nuts! Quick delivery and great customer service."
                                        },
                                        {
                                            name: "Rahul M.",
                                            rating: 5,
                                            comment: "Best dry fruits store in Bangalore. Very responsive to queries."
                                        }
                                    ].map((review, index) => (
                                        <div key={index} className="bg-amber-50/30 backdrop-blur-md rounded-lg shadow-md p-4 hover:bg-amber-50/40 transition-all">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="flex">
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="font-semibold text-amber-900">{review.name}</span>
                                            </div>
                                            <p className="text-sm text-gray-600">{review.comment}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mt-8">
                        <div className="bg-amber-50/30 backdrop-blur-md rounded-lg shadow-md p-4 hover:bg-amber-50/40 transition-all">
                            <div className="aspect-video w-full">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8893531567567!2d77.6358!3d12.9154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzU1LjQiTiA3N8KwMzgnMDguOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Live Chat Button */}
                <ChatWidget />

                {/* Free Shipping Banner */}
                <div className="fixed bottom-0 left-0 right-0 bg-amber-500 text-white py-2 text-center">
                        <p>Discover the secret to ultimate freshness – only at Nutty.</p>
                </div>
            </div>

            <div>
                <Footer />
            </div>
            </div>
        </>
    )
}