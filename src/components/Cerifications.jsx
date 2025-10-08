// src/components/Certifications.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import images from src/assets/certificates
import cert1 from "../assets/certificates/cert1.jpeg";
import cert2 from "../assets/certificates/cert2.jpeg";
import cert3 from "../assets/certificates/cert3.jpeg";
import cert4 from "../assets/certificates/cert4.png";
import cert5 from "../assets/certificates/cert5.png";
import cert6 from "../assets/certificates/cert6.png";
import cert7 from "../assets/certificates/cert7.png";
import cert8 from "../assets/certificates/cert8.png";
import cert9 from "../assets/certificates/cert9.png";
import cert10 from "../assets/certificates/cert10.png";
import cert11 from "../assets/certificates/cert11.png";
import cert12 from "../assets/certificates/cert12.png";
import cert13 from "../assets/certificates/cert13.png";
import cert14 from "../assets/certificates/cert14.png";
import cert15 from "../assets/certificates/cert15.png";
import cert16 from "../assets/certificates/cert16.jpeg";

const certificates = [
    {
        image: cert1,
        name: "Diploma in Information Technology - DiTech",
        institute: "Esoft Metro Campus",
        skills: " Web Development , Databases with SQL , Graphics and Multimedia ,Software Engineering , Programming with Python  Programming with C# ,Computer Hardware , MS Office , Network Technology",
        date: "Issued: Jan 2023",
    },
    {
        image: cert2,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert3,
        name: "AI & Machine Learning Professional",
        institute: "edX",
        skills: "AI & Machine Learning",
        date: "Issued: May 2023",
    },
    {
        image: cert4,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert5,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert6,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert7,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert8,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert9,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert10,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert11,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert12,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert13,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert14,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert15,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },
    {
        image: cert16,
        name: "JavaScript & React Bootcamp",
        institute: "Udemy",
        skills: "JavaScript, React",
        date: "Issued: Mar 2023",
    },

];

const Certifications = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % certificates.length);
        }, 6000); // 6 seconds per certificate

        return () => clearInterval(timer);
    }, []);

    const currentCert = certificates[index];

    return (
        <section id="certifications" className="py-20 text-slate-100 flex flex-col ">
            {/* ======= Heading OUTSIDE the black box ======= */}
            <h2 className="text-2xl font-bold mb-3">Certifications</h2>

            {/* ======= Black Box Container ======= */}
            <div className="w-full flex items-center justify-center">
                <div className="bg-slate-900 rounded-2xl shadow-2xl p-10 w-full max-w-6xl flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 1 }}
                            className="flex bg-slate-800 rounded-xl shadow-xl overflow-hidden max-w-4xl w-full"
                        >
                            {/* ======= Left: Certificate Image ======= */}
                            <div className="w-1/2 flex items-center">
                                <img
                                    src={currentCert.image}
                                    alt={currentCert.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* ======= Right: Description ======= */}
                            <div className="w-1/2 p-6 flex flex-col justify-center">
                                <h3 className="text-xl font-semibold mb-1">{currentCert.name}</h3>
                                <h4 className="text-lg font-bold mb-2">{currentCert.institute}</h4>
                                <p className="mb-2">
                                    <strong>Skills:</strong> {currentCert.skills}
                                </p>
                                <p className="text-sm text-slate-400">{currentCert.date}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
