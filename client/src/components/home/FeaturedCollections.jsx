import React, { useState } from "react";
import almondImg from "../../assets/images/almond.jpeg";
import cashewImg from "../../assets/images/cashew.jpeg";
import pistaImg from "../../assets/images/pista.jpeg";
import walnutImg from "../../assets/images/walnut.jpeg";
import amlaImg from "../../assets/images/amlahoney.jpeg";
import pineImg from "../../assets/images/driedpine.jpeg";
import strawImg from '../../assets/images/driedstraw.jpeg';


const FeaturedCollections = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const products = [
        {
            name: "Premium Dates",
            price: (Math.random() * 500 + 200).toFixed(2),
            image: walnutImg,
        },
        {
            name: "Pure Kashmiri Cashew",
            price: (Math.random() * 500 + 200).toFixed(2),
            image: cashewImg,
        },
        {
            name: "Haze Almond Hazelnuts",
            price: (Math.random() * 500 + 200).toFixed(2),
            image: almondImg,
        },
        {
            name: "Pista Seeds",
            price: (Math.random() * 500 + 200).toFixed(2),
            image: pistaImg,
        },
        {
            name: "Coated Amla",
            price: (Math.random() * 500 + 200).toFixed(2),
            image: amlaImg,
        },
        {
            name: "Mixed Powder",
            price: (Math.random() * 500 + 200).toFixed(2),
            image: pineImg,
        },
        {
            name: "Mixed Powder",
            price: (Math.random() * 500 + 200).toFixed(2),
            image: strawImg,
        },
    ];

    // Handle scroll event to toggle border
    const handleScroll = (e) => {
        if (e.target.scrollLeft > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto">
                {/* Heading and View All */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl md:text-4xl font-bold text-[#102C57] relative inline-block">
                        FEATURED COLLECTIONS
                        <span className="absolute bottom-[-5px] left-0 w-1/2 h-[1px] bg-gray-800"></span>
                    </h2>
                    <a
                        href="#"
                        className="px-4 py-2 text-sm md:text-base font-medium text-white bg-[#D4AF37] rounded-md shadow-md hover:bg-[#b5942c] transition"
                    >
                        View All
                    </a>
                </div>


                {/* Carousel for Mobile */}
                <div
                    className="swiper-container md:hidden overflow-x-auto flex gap-4 snap-x snap-mandatory"
                    onScroll={handleScroll}
                >
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 snap-center w-80 bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* Product Image */}
                            <div className="relative w-full pt-[75%] bg-gray-100 border-b-2 border-[#D4AF37]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            </div>
                            {/* Product Info */}
                            <div className="flex flex-col justify-between p-4 bg-[#FDF8E7] border-b-4 border-[#D4AF37] text-center">
                                <h3 className="text-lg text-gray-500 mb-2">{product.name}</h3>
                                <p className="text-base font-semibold text-[#102C57] font-premium">
                                    From Rs. {product.price}
                                </p>
                            </div>
                            {/* Gold Band Below */}
                            <div className="bg-[#D4AF37] rounded-b-sm h-[2px]" />
                        </div>
                    ))}
                </div>
    
   


                {/* Grid for Larger Screens */}
                <div className="hidden md:grid gap-8 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="group flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                        >
                            <div className="relative w-full pt-[75%] bg-gray-100 border-b-2 border-[#D4AF37]">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-between p-4 bg-[#FDF8E7] border-b-4 border-[#D4AF37] text-center">
                                <h3 className="text-lg text-gray-500 mb-2">{product.name}</h3>
                                <p className="text-base font-semibold text-[#102C57] font-premium">
                                    From Rs. {product.price}
                                </p>
                            </div>
                            <div className="bg-[#D4AF37] rounded-b-sm h-[2px]" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCollections;
