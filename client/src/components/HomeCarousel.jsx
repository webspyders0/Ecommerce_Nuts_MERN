'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import bannerImg from '../assets/images/bannerImg.webp';

const carouselData = [
    {
        title: "Premium Dry Fruits Collection",
        description: "Indulge in our exquisite selection of premium dates from around the world.",
        image: bannerImg,
        color: "from-amber-600 to-yellow-400"
    },
    {
        title: "Nutty Delights",
        description: "Discover our range of carefully selected nuts for your snacking pleasure.",
        image: bannerImg,
        color: "from-emerald-600 to-teal-400"
    },
    {
        title: "Exotic Dry Fruits",
        description: "Experience the rich flavors of our exotic dry fruits from distant lands.",
        image: bannerImg,
        color: "from-purple-600 to-indigo-400"
    }
]

export default function CreativeCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselData.length) % carouselData.length)
    }, [])

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(nextSlide, 3000);
            return () => clearInterval(timer);
        }
    }, [isPaused, nextSlide]);


    return (
        <>
            <div style={{paddingTop:'30px'}}>
                <div
                    className="relative overflow-hidden h-[500px] transition-all duration-500 ease-in-out px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >

                    {carouselData.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out transform ${index === currentSlide ? 'translate-x-0 opacity-100' :
                                index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'
                                }`}
                        >
                            <div className={`w-full h-full bg-gradient-to-br ${slide.color} p-8 flex items-center justify-center`}>
                                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                                    <div className="md:w-1/2 space-y-6 text-white">
                                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-right">
                                            {slide.title}
                                        </h2>
                                        <p className="text-lg md:text-xl animate-fade-right animation-delay-150">
                                            {slide.description}
                                        </p>
                                        <button className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors animate-fade-right animation-delay-300">
                                            Shop Now
                                        </button>
                                    </div>
                                    <div className="md:w-1/2 animate-fade-left">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg transform -rotate-6"></div>
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="rounded-lg shadow-2xl transform rotate-3 transition-transform hover:scale-105 duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Navigation buttons */}
                    {/* <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-all duration-300"
                aria-label="Previous slide"
            >
                <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-all duration-300"
                aria-label="Next slide"
            >
                <ArrowRight className="w-6 h-6 text-white" />
            </button> */}

                    {/* Progress bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-30">
                        <div
                            className="h-full bg-white transition-all duration-300 ease-in-out"
                            style={{ width: `${((currentSlide + 1) / carouselData.length) * 100}%` }}
                        ></div>
                    </div>

                    {/* Slide indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {carouselData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}