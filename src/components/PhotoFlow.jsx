import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const photos = [img1, img2, img3]; // Add all your images here

const PhotoFlow = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % photos.length); // rotate photos
        }, 4000); // 4 seconds per photo

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-96 overflow-hidden rounded-lg">
            <AnimatePresence>
                <motion.img
                    key={current}
                    src={photos[current]}
                    alt="Slideshow"
                    className="absolute w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }} // smooth fade
                />
            </AnimatePresence>
        </div>
    );
};

export default PhotoFlow;
