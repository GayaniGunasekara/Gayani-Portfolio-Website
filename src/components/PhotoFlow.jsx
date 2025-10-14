import React from "react";
import { motion } from "framer-motion";

// Import images
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
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jfif";


const photos = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16, img17
];

const PhotoFlow = () => {
    const stripWidth = photos.length * 504; // image width (500) + margin (2px * 2)

    return (
        <div className="overflow-hidden w-full bg-black flex justify-center py-4">
            <motion.div
                className="flex"
                animate={{ x: [0, -stripWidth] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 120, // ⏳ slower speed — increase this for even smoother flow
                        ease: "linear"
                    }
                }}
            >
                {[...photos, ...photos].map((photo, index) => (
                    <img
                        key={index}
                        src={photo}
                        alt={`photo-${index}`}
                        className="w-[500px] h-[350px] object-cover mx-2 rounded-lg"
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default PhotoFlow;
