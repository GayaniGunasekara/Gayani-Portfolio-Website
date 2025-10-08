import React from 'react'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'

export default function Hero() {
    return (
        <section id="home" className="pt-28 pb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
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
                        className="mt-4 text-lg text-slate-300 max-w-xl"
                    >
                        Software Engineer Intern — enthusiastic about building web & mobile apps.
                        Experienced with React, Flutter, Node and IoT systems (EleFence360). Looking
                        for impactful internships and collaborations.
                    </motion.p>

                    <div className="mt-6 flex gap-4">
                        <ScrollLink
                            to="projects"
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="inline-block px-5 py-2 rounded-lg bg-brand text-slate-900 font-medium cursor-pointer hover:brightness-95"
                        >View Projects</ScrollLink>

                        <a href="#contact" className="inline-block px-5 py-2 rounded-lg border border-slate-600 text-slate-300">
                            Contact
                        </a>
                    </div>

                    <div className="mt-6 text-sm text-slate-400">
                        Based in Colombo, Sri Lanka • BSc (Hons) Computing & Info Systems • Current GPA 3.675
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <motion.div
                        initial={{ scale: 0.9, rotate: -6, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 120, damping: 12 }}
                        className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden glass p-1"
                    >
                        <img
                            src="/profile.jpg"
                            alt="Gayani Malsha"
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute -bottom-3 -left-3 bg-accent px-3 py-1 rounded-md text-xs text-white shadow-lg">
                            Software Engineer Intern
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
