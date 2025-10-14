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
import cert17 from "../assets/certificates/cert17.jpeg";
import cert18 from "../assets/certificates/cert18.jpeg";
import cert19 from "../assets/certificates/cert19.jpg";

const certificates = [
    {
        image: cert1,
        name: "Diploma in Information Technology - DiTech",
        institute: "Esoft Metro Campus",
        skills: " Web Development , Databases with SQL , Graphics and Multimedia ,Software Engineering , Programming with Python  Programming with C# ,Computer Hardware , MS Office , Network Technology",
        date: "Issued: May 2021",
    },
    {
        image: cert2,
        name: "BCS Level 4 Certificate in IT",
        institute: "BCS, The Chartered Institute for IT",
        skills: "Software Development, Information Systems, Computer Network Technolog",
        date: "Issued: April 2023",
    },
    {
        image: cert3,
        name: "Java Application Development using JavaSE",
        institute: "University of Colombo School of Computing",
        skills: "Java Application Development ",
        date: "Issued: January 2023",
    },
    {
        image: cert4,
        name: "Python Essentials 1",
        institute: "Cisco Networking Academy",
        skills: "Python Programming",
        date: "Issued: May 2023:",
    },
    {
        image: cert5,
        name: "JavaScript  Essentials 1",
        institute: "Cisco Networking Academy",
        skills: "JavaScript  Programming",
        date: "Issued: October 2025",
    },
    {
        image: cert6,
        name: "CI/CD",
        institute: "SimpliLearn",
        skills: "Ci/CD Pipelines Basics",
        date: "Issued: September 2025",
    },
    {
        image: cert7,
        name: "Linux ",
        institute: "KodeKloud",
        skills: "Lunux Fundamentals ",
        date: "Issued: September  2025",
    },
    {
        image: cert8,
        name: "Introduction to Career Skills in Software Development",
        institute: "LinkedIn Learning",
        skills: "Software development, Career management, Tech Career Skills",
        date: "Issued: February 2025",
    },
    {
        image: cert9,
        name: "Code Forker Badge",
        institute: "Kaggle",
        skills: "Coding Skills",
        date: "Issued: August 2025",
    },
    {
        image: cert10,
        name: "Learner Badge",
        institute: "Kaggle",
        skills: "Quick Learning Skills",
        date: "Issued: August 2025",
    },
    {
        image: cert11,
        name: "Intro to Programming",
        institute: "Kaggle",
        skills: "Python Programming , Coding Skills",
        date: "Issued: August 2025",
    },
    {
        image: cert12,
        name: "Deploy Apps on Azure App Service",
        institute: "Microsoft Learn Student Ambassadar ",
        skills: "Azure (Basics) , Cloud Computing",
        date: "Issued: September 2024",
    },
    {
        image: cert13,
        name: "Getting Start with Git and GitHub",
        institute: "Microsoft Learn Student Ambassadar",
        skills: "Git, Version Control",
        date: "Issued: November 2024",
    },
    {
        image: cert14,
        name: "SQL (Intermediate)",
        institute: "HackerRank",
        skills: "SQL, Queries, Databases",
        date: "Issued: September 2024",
    },
    {
        image: cert15,
        name: "Python Coder Badge",
        institute: "Kaggle",
        skills: "Python",
        date: "Issued: August 2025",
    },
    {
        image: cert16,
        name: "Physical Computing with Micro:bit",
        institute: "StemUp Education Foundation",
        skills: "Micro:bit, Problem Solving, Arduino Coding, Mini-Project",
        date: "Issued: February 2019",
    },
    {
        image: cert17,
        name: "National ICT Awards -NBQSA 2025 - MERIT Award - Tertiary Student Project (Technology) in Student Category ",
        institute: "BCS, The Chartered Institute for IT",
        skills: "EleFence360 Project",
        date: "Issued: October 2025",
    },
    {
        image: cert18,
        name: "Top 7 Finalist - HackElite 1.0 ",
        institute: "IEEE WIE Student Branch Affinity Group of University of Moratuwa",
        skills: "Innovation, Collaboration ,Leadership, Presentation Skills, Prototyping, ",
        date: "Issued: October 2024",
    },
    {
        image: cert19,
        name: "Google Cloud Certified Professional Data Engineer",
        institute: "Udemy",
        skills: "Data Science",
        date: "Issued: October 2025",
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
