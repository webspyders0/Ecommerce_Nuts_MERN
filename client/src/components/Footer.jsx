
import { Play, Facebook, Instagram, Search, User, ShoppingCart, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <footer className="bg-amber-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        <div>
                            <img src="/placeholder.svg?height=40&width=40" alt="NUTTY Logo" className="h-10 w-10 mb-4" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <ul className="space-y-2">
                                <li>Blogs</li>
                                <li>Recipes</li>
                                <li>Occasions gifting</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">All Products</h3>
                            <ul className="space-y-2">
                                <li>Occasions Gifting</li>
                                <li>NUTTY Delicacies</li>
                                <li>Dates</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Categories</h3>
                            <ul className="space-y-2">
                                <li>Dates</li>
                                <li>Nuts</li>
                                <li>Dry Fruits</li>
                                <li>Seeds</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">FOLLOW US ON:</h3>
                            <div className="flex space-x-4">
                                <Facebook className="h-6 w-6" />
                                <Instagram className="h-6 w-6" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-amber-700 text-center">
                        <p>&copy; 2024, NUTTY Dates & Nuts. All Rights Reserved.</p>
                        <div className="mt-4 space-x-4">
                            <a href="#" className="text-amber-200 hover:text-white">Delivery</a>
                            <a href="#" className="text-amber-200 hover:text-white">Returns</a>
                            <a href="#" className="text-amber-200 hover:text-white">Terms & Conditions</a>
                            <a href="#" className="text-amber-200 hover:text-white">Privacy Policy</a>
                            <a href="#" className="text-amber-200 hover:text-white">Careers</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer