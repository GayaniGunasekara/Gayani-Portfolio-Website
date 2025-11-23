import React from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'

export default function Hero() {
    return (
        <section id="home" className="pt-28 pb-16">
            <div className="grid md:grid-cols-2 gap-5 items-center">
                <div>
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold leading-tight"
                    >
                        Gayani Malsha Gunasekara
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="mt-4 text-2xl  text-slate-300 "
                    >
                        Enthusiastic IT undergraduate passionate about Software Development, Data Science,and Software Project Management. Skilled in Java, Python, and modern tech tools, with a creative and analytical mindset. Eager to contribute to innovative projects and gain real-world experience through an internship.
                    </motion.p>
                </div>



                <div className="flex justify-center md:justify-end">
                    <motion.div
                        initial={{ scale: 0.9, rotate: -6, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                        className="relative w-67 h-67 md:w-80 md:h-80 rounded-2xl overflow-hidden glass p-1"
                    >
                        <img
                            src="/profile.png"
                            alt="Gayani Malsha"
                            className="w-full h-full object-cover rounded-xl"
                        />

                    </motion.div>
                </div>
            </div>
        </section>
    )
}
