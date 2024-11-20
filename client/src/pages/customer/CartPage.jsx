'use client'

import React from 'react'
import { Minus, Plus, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import backgroundImage from '../../assets/images/nutso3.png'
import { Helmet } from 'react-helmet'
import almondImg from '../../assets/images/almond.jpeg'
import cashewImg from '../../assets/images/cashew.jpeg'
import pistaImg from '../../assets/images/pista.jpeg'
import walnutImg from '../../assets/images/walnut.jpeg'

export default function CartPage() {
    const cartItems = [
        {
            id: 1,
            name: 'Medjoul Jordan Premium Dates - A Royal Delight',
            price: 2850.00,
            quantity: 3,
            weight: '500G',
            size: 'Premium',
            image: almondImg
        },
        {
            id: 2,
            name: 'Medjoul Jordan Premium Dates - A Royal Delight',
            price: 2850.00,
            quantity: 3,
            weight: '500G',
            size: 'Premium',
            image: cashewImg
        },
        {
            id: 3,
            name: 'Medjoul Jordan Premium Dates - A Royal Delight',
            price: 2850.00,
            quantity: 3,
            weight: '500G',
            size: 'Premium',
            image: pistaImg
        }
    ]

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    const gst = subtotal * 0.04 // 4% GST
    const deliveryCharge = 100.00
    const total = subtotal + gst + deliveryCharge

    return (
        <>

            <Helmet>
                <title>Cart  - Your Favorite Items</title>
            </Helmet>

            <div className="min-h-screen bg-[#FDF8E7]" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',
            }}>
                <Navbar />

                <div className="max-w-7xl mx-auto px-4 py-12 pt-32">
                    <h1 className="text-2xl font-semibold text-[#8B4513] mb-8">
                        Shopping Cart ({cartItems.length} Items)
                    </h1>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items */}
                        <div className="lg:w-2/3">
                            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex flex-col md:flex-row gap-6 py-6 border-b border-gray-200 last:border-b-0">
                                        {/* Image Section */}
                                        <div className="w-full md:w-48 h-48 bg-gray-50 rounded-lg overflow-hidden mb-4 md:mb-0">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>

                                        {/* Item Details */}
                                        <div className="flex-1">
                                            <h3 className="text-lg  font-medium text-[#161616] mb-2">{item.name}</h3>
                                            <div className="space-y-2 text-gray-600 mb-4">
                                                <p>Weight: {item.weight}</p>
                                                <p>Size: {item.size}</p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                                                    <Minus className="h-4 w-4" />
                                                </button>
                                                <span className="w-12 text-center">{item.quantity}</span>
                                                <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-50">
                                                    <Plus className="h-4 w-4" />
                                                </button>
                                                <button className="text-blue-600 hover:text-blue-800 ml-4">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        {/* Price Section */}
                                        <div className="text-right mt-4 md:mt-0">
                                            <p className="text-xl font-semibold text-[#8B4513]">
                                                Rs. {item.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-1/3">
                            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4 sticky top-24">
                                <h2 className="text-xl font-semibold text-[#8B4513] mb-4">Order Summary</h2>
                                <div className="flex justify-between text-lg">
                                    <span className="text-[#8B4513]">Subtotal:</span>
                                    <span className="font-semibold">Rs. {subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg">
                                    <span className="text-[#8B4513]">GST (4%):</span>
                                    <span className="font-semibold">Rs. {gst.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg">
                                    <span className="text-[#8B4513]">Delivery Charge:</span>
                                    <span className="font-semibold">Rs. {deliveryCharge.toFixed(2)}</span>
                                </div>

                                <div className="bg-[#FFF3CD] border border-[#FFE69C] text-[#856404] rounded-lg p-4 text-center my-6">
                                    Order before 10am for same day delivery
                                </div>

                                <div className="flex justify-between items-center text-xl font-bold text-[#8B4513] pt-4 border-t">
                                    <span>Total Amount:</span>
                                    <span>Rs. {total.toFixed(2)}</span>
                                </div>

                                <button className="w-full bg-[#4834D4] text-white py-4 rounded-lg hover:bg-[#3A2BBE] transition-colors mt-6">
                                    Buy Now
                                </button>

                                <p className="text-center text-sm text-gray-600 mt-4">
                                    All payment modes available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}