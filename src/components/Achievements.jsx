import React from 'react'

const achievements = [
    'NBQSA Winner (National ICT Awards) — 2025',
    'InnoServe Awards 2025 — Participation',
    'HackElite finalist',
    'PearlHack Semi-finalist',
    'Idealize 2025 — Proposal Winner'
]

export default function Achievements() {
    return (
        <section id="achievements" className="py-12">
            <h2 className="text-2xl font-bold mb-4">Achievements</h2>

            <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((a, idx) => (
                    <div key={idx} className="p-4 glass rounded-lg">
                        <div className="font-medium">{a}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}
