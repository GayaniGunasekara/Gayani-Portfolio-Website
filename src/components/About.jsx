import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-12">
            <div className="grid md:grid-cols-3 gap-6 items-start">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-3">About</h2>
                    <p className="text-slate-300">
                        Enthusiastic IT undergraduate specializing in software development with strong foundations in Java, Python, and SQL.
                        Experienced in building web & mobile apps using React, Node.js, and Flutter. Skilled with OOP, SDLC, Agile, and Data Structures.
                        I led EleFence360 — an IoT-based elephant detection & deterrence system and winner at NBQSA 2025.
                    </p>

                    <div className="mt-4 grid sm:grid-cols-2 gap-4">
                        <div className="p-4 glass rounded-lg">
                            <div className="text-sm text-slate-400">Email</div>
                            <div className="font-medium">gayanigunasekara2001@gmail.com</div>
                        </div>
                        <div className="p-4 glass rounded-lg">
                            <div className="text-sm text-slate-400">Location</div>
                            <div className="font-medium">Colombo, Sri Lanka</div>
                        </div>
                    </div>
                </div>

                <aside id="contact" className="p-4 glass rounded-lg">
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            Email:{' '}
                            <a
                                className="text-brand"
                                href="mailto:gayanigunasekara2001@gmail.com"
                            >
                                gayanigunasekara2001@gmail.com
                            </a>
                        </li>
                        <li>
                            LinkedIn:{' '}
                            <a
                                className="text-brand"
                                href="https://www.linkedin.com/in/gayanigunasekara"
                                target="_blank"
                                rel="noreferrer"
                            >
                                linkedin.com/in/gayanigunasekara
                            </a>
                        </li>
                        <li>
                            GitHub:{' '}
                            <a
                                className="text-brand"
                                href="https://github.com/GayaniGunasekara"
                                target="_blank"
                                rel="noreferrer"
                            >
                                github.com/GayaniGunasekara
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </section>
    );
}
