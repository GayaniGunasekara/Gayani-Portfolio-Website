// src/components/Achievements.jsx
import React from 'react'

const achievements = [
    {
        title: 'NBQSA Winner (National ICT Awards) — 2025',
        link: 'https://nbqsa.org/' // replace with your actual link
    },
    {
        title: 'InnoServe Awards 2025 — Participation',
        link: 'https://www.innoserveawards.org/'
    },
    {
        title: 'HackElite finalist',
        link: 'https://hackelite.com/'
    },
    {
        title: 'PearlHack Semi-finalist',
        link: 'https://pearlhack.com/'
    },
    {
        title: 'Idealize 2025 — Proposal Winner',
        link: 'https://idealize.lk/'
    }
]

export default function Achievements() {
    return (
        <section id="achievements" className="py-12">
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>

            <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((a, idx) => (
                    <a
                        key={idx}
                        href={a.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 glass rounded-lg hover:bg-slate-800 transition block"
                    >
                        <div className="font-medium text-slate-200 hover:underline">
                            {a.title}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
