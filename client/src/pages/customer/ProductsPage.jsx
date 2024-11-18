'use client'

import { useState } from 'react'
// import Image from 'next/image'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import { ChevronRight, Search, ShoppingCart, Heart } from 'lucide-react'
import Navbar from '../../components/Navbar';
import backgroundImage from '../../assets/images/nutso3.png';
import Footer from '../../components/Footer';

export default function ProductPage() {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 5900 });
    const [selectedCategories, setSelectedCategories] = useState([])

    const categories = [
        { name: 'Chocolate', count: 12 },
        { name: 'Dates', count: 45 },
        { name: 'Dry Fruit', count: 32 },
        { name: 'Gifting', count: 18 },
        { name: 'Gourmet Products', count: 24 },
        { name: 'Honey', count: 8 },
        { name: 'Nuts', count: 36 },
        { name: 'Seeds', count: 15 },
        { name: 'Snacks', count: 22 },
        { name: 'Spices', count: 14 },
        { name: 'Stuffed Dates', count: 28 },
        { name: 'Sugar & Sweeteners', count: 9 },
        { name: 'Supplement', count: 6 },
    ]

    const products = [
        {
            name: 'Medjoul Jordan Premium Dates',
            price: 475.00,
            image: '/placeholder.svg?height=300&width=300'
        },
        {
            name: 'Super Premium Figs Afghan Anjeer',
            price: 470.00,
            image: '/placeholder.svg?height=300&width=300'
        },
        {
            name: 'Chile Walnut Without Shell Akhrot',
            price: 548.00,
            image: '/placeholder.svg?height=300&width=300'
        },
        {
            name: 'Premium Iranian Pistachio No 1',
            price: 470.00,
            image: '/placeholder.svg?height=300&width=300'
        },
        {
            name: 'Ajfan Dates Milkshake',
            price: 240.00,
            image: '/placeholder.svg?height=300&width=300'
        },
        {
            name: 'Breakfast Hearty Mix',
            price: 290.00,
            image: '/placeholder.svg?height=300&width=300'
        },
        {
            name: 'Pure Kashmiri Shilajit',
            price: 745.00,
            image: '/placeholder.svg?height=300&width=300'
        },
        {
            name: 'Haze Cream With Hazelnuts',
            price: 385.00,
            image: '/placeholder.svg?height=300&width=300'
        },
        {
            name: 'Ajwa Seed Powder',
            price: 395.00,
            image: '/placeholder.svg?height=300&width=300'
        },
    ]

    const toggleCategory = (category) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        )
    }

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#FDF8E7', color: '#8B4513', minHeight: '100vh' }}>
            <Helmet>
                <title>Products | Ensure for why you order here</title>
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
                    {/* Hero Banner */}
                    <div className="relative h-48 md:h-64 bg-cover bg-center" style={{
                        backgroundImage: 'url("/placeholder.svg?height=400&width=1200")'
                    }}>
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-white">ALL PRODUCTS</h1>
                        </div>
                    </div>

                    {/* Breadcrumb */}
                    <div className="container mx-auto px-4 py-4">
                        <div className="flex items-center gap-2 text-amber-800">
                            <Link href="/" className="hover:text-amber-600">Home</Link>
                            <ChevronRight className="h-4 w-4" />
                            <span>All Products</span>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 lg:px-32 py-8">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Filters Sidebar */}
                            <div className="lg:w-1/4">
                                <div className="bg-white rounded-lg shadow-sm p-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-lg font-semibold text-amber-800">FILTER</h2>
                                        <button className="text-sm text-amber-600 hover:text-amber-800">
                                            Remove all
                                        </button>
                                    </div>

                                    {/* Availability */}
                                    <div className="mb-6">
                                        <h3 className="font-medium mb-3 text-amber-800">AVAILABILITY</h3>
                                        <div className="space-y-2">
                                            <label className="flex items-center gap-2">
                                                <input type="radio" name="availability" className="text-amber-600" />
                                                <span>In stock (177)</span>
                                            </label>
                                            <label className="flex items-center gap-2">
                                                <input type="radio" name="availability" className="text-amber-600" />
                                                <span>Out of stock (54)</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Price Range */}
                                    <div className="mb-6">
                                        <h3 className="font-medium mb-3 text-amber-800">PRICE</h3>
                                        <div className="flex gap-4 items-center">
                                            {/* Minimum Price Slider */}
                                            <input
                                                type="range"
                                                min="0"
                                                max="5900"
                                                step="100" // Step increment set to 100
                                                value={priceRange.min}
                                                onChange={(e) =>
                                                    setPriceRange((prev) => ({
                                                        ...prev,
                                                        min: Math.min(Number(e.target.value), priceRange.max - 100), // Prevent overlapping
                                                    }))
                                                }
                                                className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                            {/* Maximum Price Slider */}
                                            <input
                                                type="range"
                                                min="0"
                                                max="5900"
                                                step="100" // Step increment set to 100
                                                value={priceRange.max}
                                                onChange={(e) =>
                                                    setPriceRange((prev) => ({
                                                        ...prev,
                                                        max: Math.max(Number(e.target.value), priceRange.min + 100), // Prevent overlapping
                                                    }))
                                                }
                                                className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer"
                                            />
                                        </div>
                                        <div className="text-sm text-gray-600 mt-2">
                                            Price: Rs. {priceRange.min} - Rs. {priceRange.max}
                                        </div>
                                    </div>



                                    {/* Product Types */}
                                    <div>
                                        <h3 className="font-medium mb-3 text-amber-800">PRODUCT TYPE</h3>
                                        <div className="space-y-2">
                                            {categories.map((category) => (
                                                <label key={category.name} className="flex items-center gap-2">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedCategories.includes(category.name)}
                                                        onChange={() => toggleCategory(category.name)}
                                                        className="text-amber-600 rounded"
                                                    />
                                                    <span>{category.name}</span>
                                                    <span className="text-gray-500 text-sm">({category.count})</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="lg:w-3/4">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {products.map((product, index) => (
                                        <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                            <div className="aspect-square relative">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-amber-800 font-medium mb-2 hover:text-amber-600">
                                                    <Link to="#">{product.name}</Link>
                                                </h3>
                                                <div className="flex items-center justify-between">
                                                    <p className="text-amber-800 font-semibold">
                                                        From Rs. {product.price.toFixed(2)}
                                                    </p>
                                                    <button className="text-amber-600 hover:text-amber-800">
                                                        <Heart className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                                </div>

                                {/* Pagination */}
                                <div className="flex justify-center mt-8 gap-2">
                                    <button className="w-8 h-8 flex items-center justify-center rounded bg-amber-500 text-white">
                                        1
                                    </button>
                                    {[2, 3, '...', 19].map((page, index) => (
                                        <button
                                            key={index}
                                            className="w-8 h-8 flex items-center justify-center rounded hover:bg-amber-100"
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-amber-100">
                                        <ChevronRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer  */}
                    <Footer />

                    {/* Free Shipping Banner */}
                    <div className="fixed bottom-0 left-0 right-0 bg-amber-500 text-white py-2 text-center">
                        <p>Congratulations! You&apos;ve got free shipping | Use Code &quot;AJFANF5&quot;</p>
                    </div>
                </main>
            </div>
        </div>
    )
}