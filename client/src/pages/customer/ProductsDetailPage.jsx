'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/images/nutso3.png'
import { ChevronRight, Heart, Minus, Plus, Search, ShoppingCart, Star, User } from 'lucide-react'
import Navbar from '../../components/Navbar'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer'

const recentlyViewed = [
    { name: 'Premium Walnuts', image: '/placeholder.svg?height=300&width=300', price: 385.00 },
    { name: 'Luxury Gift Box', image: '/placeholder.svg?height=300&width=300', price: 1200.00 },
    { name: 'Premium Dates', image: '/placeholder.svg?height=300&width=300', price: 299.00 },
    { name: 'Premium Iranian Pistachio', image: '/placeholder.svg?height=300&width=300', price: 470.00 }
]

const productImages = [
    '/placeholder.svg?height=600&width=600&text=Image1',
    '/placeholder.svg?height=600&width=600&text=Image2',
    '/placeholder.svg?height=600&width=600&text=Image3',
    '/placeholder.svg?height=600&width=600&text=Image4'
]

export default function ProductDetailPage() {
    const [activeTab, setActiveTab] = useState('description')
    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState('250G')
    const [activeImage, setActiveImage] = useState(0)

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#FDF8E7', color: '#8B4513', minHeight: '100vh' }}>
            <Helmet>
                <title>Product details | Ensure for why you order here</title>
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
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-amber-800 mb-8 mt-12 text-sm md:px-32 px-2">
                        <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
                        <ChevronRight className="h-4 w-4" />
                        <Link to="/products" className="hover:text-amber-600 transition-colors">Products</Link>
                        <ChevronRight className="h-4 w-4" />
                        <span className="font-medium">Premium Iranian Pistachio No. 1</span>
                    </div>

                    {/* Product Section */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-12 md:px-32 px-2">
                        {/* Product Image Gallery */}
                        <div className="flex gap-4">
                            {/* Thumbnails */}
                            <div className="flex flex-col gap-4">
                                {productImages.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`relative w-20 h-20 border rounded-md overflow-hidden ${activeImage === index ? 'border-amber-800' : 'border-gray-200'
                                            }`}
                                    >
                                        <img
                                            src={image}
                                            alt={`Product Image ${index + 1}`}
                                            className="object-cover w-full h-full"
                                        />
                                    </button>
                                ))}
                            </div>

                            {/* Main Image */}
                            <div className="flex-grow bg-white rounded-2xl p-8 shadow-lg">
                                <div className="relative aspect-square overflow-hidden rounded-xl">
                                    <img
                                        src={productImages[activeImage]}
                                        alt="Premium Iranian Pistachio"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="space-y-8">
                            <h1 className="text-4xl font-bold text-gray-900 leading-tight">Premium Iranian Pistachio No. 1</h1>
                            <div className="text-5xl font-bold text-amber-800">Rs. 470.00</div>

                            {/* Size Selector */}
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-700">SIZE</label>
                                <div className="flex gap-4">
                                    {['250G', '500G', '1KG'].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${selectedSize === size
                                                    ? 'bg-amber-800 text-white'
                                                    : 'bg-white text-amber-800 hover:bg-amber-100'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selector */}
                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-gray-700">QUANTITY</label>
                                <div className="flex items-center gap-4 bg-white rounded-full p-2 w-fit">
                                    <button
                                        onClick={decreaseQuantity}
                                        className="p-2 rounded-full hover:bg-amber-100 transition-colors"
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="w-12 text-center font-medium">{quantity}</span>
                                    <button
                                        onClick={increaseQuantity}
                                        className="p-2 rounded-full hover:bg-amber-100 transition-colors"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-[#D4AF37] to-[#F2D472] text-white rounded-full font-medium hover:from-[#B08C2F] hover:to-[#D4AF37] transition-colors shadow-md">
                                    Add to Cart
                                </button>
                                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-[#102C57] to-[#1E4D8E] text-white rounded-full font-medium hover:from-[#0B1E3B] hover:to-[#153A6C] transition-colors shadow-md">
                                    Buy It Now
                                </button>
                                <button className="p-3 bg-white rounded-full hover:bg-amber-100 transition-colors shadow-md">
                                    <Heart className="h-6 w-6 text-amber-800" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Description and Reviews Tabs */}
                    <div className="mb-12 bg-white rounded-2xl shadow-lg p-8 md:mx-24 mx-2">
                        <div className="border-b border-gray-200">
                            <div className="flex gap-8">
                                <button
                                    className={`py-4 text-lg font-medium relative ${activeTab === 'description'
                                            ? 'text-amber-800'
                                            : 'text-gray-500 hover:text-amber-800'
                                        }`}
                                    onClick={() => setActiveTab('description')}
                                >
                                    Description
                                    {activeTab === 'description' && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-800"></span>
                                    )}
                                </button>
                                <button
                                    className={`py-4 text-lg font-medium relative ${activeTab === 'reviews'
                                            ? 'text-amber-800'
                                            : 'text-gray-500 hover:text-amber-800'
                                        }`}
                                    onClick={() => setActiveTab('reviews')}
                                >
                                    Customer Reviews
                                    {activeTab === 'reviews' && (
                                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-800"></span>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="py-6">
                            {activeTab === 'description' ? (
                                <div className="prose max-w-none">
                                    <p className="text-gray-600">
                                        Iranians call the pistachio "Green Gold" due to its cultural popularity and intense flavour. Here at Ajfan, we offer a vast range of premium pistachios which are handpicked to guarantee the utmost quality.
                                    </p>
                                    <p className="text-gray-600 mt-4">
                                        No oil is added during the cooking process, only salt to give you the right amount of flavor. Since pistachios contain vitamins and minerals, they make for a nutritious, heart-healthy snack. Instead of chips or candy, grab a handful of pistachios—they'll leave you feeling energized and satisfied at the same time.
                                    </p>
                                    <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                                        <h3 className="text-lg font-semibold text-amber-800 mb-2">Did you know?</h3>
                                        <p className="text-sm text-gray-600">
                                            Pistachios are one of the oldest flowering nut trees, with evidence suggesting that humans were enjoying them as early as 7,000 BC. They're not just delicious, but also packed with nutrients, including protein, fiber, and various vitamins and minerals.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex">
                                                    {[1, 2, 3, 4].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-amber-400 text-amber-400" />
                                                    ))}
                                                    <Star className="h-5 w-5 text-amber-400" />
                                                </div>
                                                <span className="text-lg font-medium">4.00 out of 5</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Based on 25 reviews</p>
                                        </div>
                                        <button className="px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors shadow-md">
                                            Write a review
                                        </button>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            { name: 'Divya Guleria', rating: 5, title: 'Great quality', content: 'Great quality and product taste. Packaging was also good' },
                                            { name: 'Chenchaiah K', rating: 5, title: 'Premium Iranian Pistachio - Pista No 1', content: 'Excellent product, fresh and flavorful.' },
                                            { name: 'Rohini k', rating: 1, title: 'Pistachio was bad', content: 'The pistachios delivered to us was very bad. It was numb. This is the second time its happening. Not sure from which shop in chennai its getting delivered to us, but whenever we order pistas online, its bad. Mat be old stock.' },
                                        ].map((review, index) => (
                                            <div key={index} className="border-b pb-6">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="flex">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <Star
                                                                key={star}
                                                                className={`h-4 w-4 ${star <= review.rating ? 'stroke-amber-400' : 'stroke-gray-300'}`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="text-sm font-medium">{review.name}</span>
                                                    <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Verified</span>
                                                </div>
                                                <h3 className="font-medium mb-2">{review.title}</h3>
                                                <p className="text-gray-600">{review.content}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pagination */}
                                    <div className="flex justify-center gap-2 mt-8">
                                        {[1, 2, 3, '...', 5].map((page, index) => (
                                            <button
                                                key={index}
                                                className={`w-8 h-8 flex items-center justify-center rounded-full ${page === 1 ? 'bg-amber-800 text-white' : 'bg-white text-amber-800 hover:bg-amber-100'
                                                    } transition-colors`}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Recently Viewed Products */}
                    <div className="md:px-28 mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-amber-800">RECENTLY VIEWED PRODUCTS</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {recentlyViewed.map((product, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
                                >
                                    <div className="relative pt-[100%]">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="absolute top-0 left-0 w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium mb-2 text-gray-800">{product.name}</h3>
                                        <p className="text-amber-800 font-semibold">Rs. {product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    )
}