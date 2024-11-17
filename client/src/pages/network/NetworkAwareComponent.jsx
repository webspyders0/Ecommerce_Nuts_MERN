import React from 'react';
import { motion } from 'framer-motion';
import { useNetworkStatus } from './NetworkStatusProvider';
import backgroundImage from '../../assets/images/nutso3.png';

const NetworkAwareComponent = ({ children }) => {
    const { isNetworkSlow, isLoading } = useNetworkStatus();

    if (isLoading) {
        return (
            <div
                className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(253, 248, 231, 0.9), rgba(253, 248, 231, 0.9)), url(${backgroundImage})`, // Overlay gradient and image
                    backgroundBlendMode: 'overlay', // Ensures the gradient blends with the image
                    backgroundSize: 'cover', // Scales image to cover the entire area
                    backgroundPosition: 'center', // Centers the image
                    backgroundRepeat: 'repeat', // Prevents tiling
                     }}
            >
                <div className=" text-center">
                    {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-amber-500 mx-auto mb-4"></div>
                    <p className="text-amber-800 text-xl font-semibold">Loading...</p> */}
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default NetworkAwareComponent;