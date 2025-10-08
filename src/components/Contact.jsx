import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="py-12">
            <div className="max-w-6xl ">
                <h2 className="text-2xl font-bold mb-6">Contact Me</h2>

                {/* Make items horizontal using flex or grid-cols-5 */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 text-center">
                    <div className="p-4 glass rounded-lg">
                        <div className="text-sm text-slate-400">Email</div>
                        <a
                            className="text-brand"
                            href="mailto:gayanigunasekara2001@gmail.com"
                        >
                            gayanigunasekara2001@gmail.com
                        </a>
                    </div>

                    <div className="p-4 glass rounded-lg">
                        <div className="text-sm text-slate-400">Location</div>
                        <a
                            className="text-brand"
                            href="https://www.google.com/maps/place/Kosgama"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Kosgama, Colombo, Sri Lanka
                        </a>
                    </div>

                    <div className="p-4 glass rounded-lg">
                        <div className="text-sm text-slate-400">Phone</div>
                        <a className="text-brand" href="tel:+94718807499">
                            +94 71 880 7499
                        </a>
                    </div>

                    <div className="p-4 glass rounded-lg">
                        <div className="text-sm text-slate-400">LinkedIn</div>
                        <a
                            className="text-brand"
                            href="https://www.linkedin.com/in/gayanigunasekara"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin.com/in/gayanigunasekara
                        </a>
                    </div>

                    <div className="p-4 glass rounded-lg">
                        <div className="text-sm text-slate-400">GitHub</div>
                        <a
                            className="text-brand"
                            href="https://github.com/GayaniGunasekara"
                            target="_blank"
                            rel="noreferrer"
                        >
                            github.com/GayaniGunasekara
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
