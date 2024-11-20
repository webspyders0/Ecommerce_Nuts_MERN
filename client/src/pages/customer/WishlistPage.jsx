'use client'

import React from 'react'
import { Heart, ShoppingCart, ArrowLeft, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbar from '../../components/Navbar'
import backgroundImage from '../../assets/images/nutso3.png'
import almondImg from '../../assets/images/almond.jpeg'
import cashewImg from '../../assets/images/cashew.jpeg'
import pistaImg from '../../assets/images/pista.jpeg'
import walnutImg from '../../assets/images/walnut.jpeg'

export default function WishlistPage() {
    const wishlistItems = [
        {
            id: 1,
            name: 'Ajfan Dates Milkshake',
            price: 300.00,
            image: almondImg
        },
        {
            id: 2,
            name: 'Pure Kashmiri Shilajit',
            price: 800.00,
            image: cashewImg
        },
        {
            id: 3,
            name: 'Premium Almonds',
            price: 550.00,
            image: pistaImg
        },
        {
            id: 4,
            name: 'Organic Honey',
            price: 450.00,
            image: walnutImg
        }
    ]

    // Uncomment the next line to test empty wishlist scenario
    // const wishlistItems = []

    return (
        <div className="min-h-screen bg-[#FDF8E7] font-serif">
            <Helmet>
                <title>Wishlist | AJFAN - Your Favorite Items</title>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
            </Helmet>

            <Navbar />

            <main className="pt-20 pb-16" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',
            }}>
                <div className="max-w-6xl mx-auto px-4 py-8 mt-8">
                    <h1 className="text-3xl font-bold text-[#8B4513] mb-6 text-center font-playfair">My Wishlist</h1>

                    {wishlistItems.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {wishlistItems.map((item) => (
                                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105">
                                    <div className="relative">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-32 object-cover"
                                        />
                                        <div className="absolute top-0 right-0 bg-[#D4AF37] text-white px-2 py-1 text-xs rounded-bl-lg">
                                            Rs. {item.price.toFixed(2)}
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-sm font-semibold text-[#8B4513] mb-2 truncate">{item.name}</h3>
                                        <div className="flex justify-between items-center">
                                            <button className="bg-[#8B4513] text-white px-2 py-1 rounded-full hover:bg-[#A0522D] transition-colors flex items-center text-xs">
                                                <ShoppingCart className="h-3 w-3 mr-1" />
                                                Add to Cart
                                            </button>
                                            <button className="text-red-500 p-1 rounded-full hover:bg-red-100 transition-colors">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white rounded-lg shadow-md">
                            <Heart className="h-16 w-16 text-[#D4AF37] mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-[#8B4513] mb-3 font-playfair">Your wishlist is empty</h2>
                            <p className="text-[#A0522D] mb-6">Add items to your wishlist to save them for later.</p>
                            <Link to="/" className="bg-[#8B4513] text-white px-6 py-2 rounded-full hover:bg-[#A0522D] transition-colors inline-flex items-center text-sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Continue Shopping
                            </Link>
                        </div>
                    )}
                </div>
            </main>

            <div className="fixed bottom-0 left-0 right-0 bg-[#D4AF37] text-center py-3 text-white text-sm font-semibold">
                Discover our latest products and add them to your wishlist!
            </div>
        </div>
    )
}