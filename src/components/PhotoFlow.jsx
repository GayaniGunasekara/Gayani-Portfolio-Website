import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";

const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]; // Add all your images here

const PhotoFlow = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % photos.length); // rotate photos
        }, 4000); // 4 seconds per photo

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-250 h-200 overflow-hidden rounded-lg items-center justify-center">
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
