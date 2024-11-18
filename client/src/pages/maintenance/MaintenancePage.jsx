'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import backgroundImage from '../../assets/images/nutso3.png';

export default function MaintenancePage() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the email to your backend
        console.log('Notification email:', email)
        setEmail('')
        alert('Thank you! We\'ll notify you when we\'re back online.')
    }

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat',
                backgroundColor: '#FDF8E7'

            }}
         className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-md"
            >
                <h1 className="text-3xl font-bold mb-4">Website Under Maintenance</h1>
                <p className="text-lg mb-6">
                    We're currently updating our website to serve you better.
                    Our team of developers is working hard to bring you an improved experience.
                </p>
                <p className="text-md mb-8">
                    We apologize for any inconvenience and appreciate your patience.
                    We'll be back online shortly with exciting new features!
                </p>
            </motion.div>

            <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                onSubmit={handleSubmit}
                className="w-full max-w-md"
            >
                <div className="flex items-center border-b border-gray-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="email"
                        placeholder="Enter your email for updates"
                        aria-label="Email for updates"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                    >
                        Notify Me
                    </button>
                </div>
            </motion.form>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 text-sm text-gray-600"
            >
                <p>For urgent inquiries, please contact our support team at support@example.com</p>
            </motion.div>
        </div>
    )
}