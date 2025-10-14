// src/components/Achievements.jsx
import React from 'react'

const achievements = [
    {
        title: ' "National ICT Awards -NBQSA 2025 - MERIT Award - Tertiary Student Project (Technology) in Student Category "',
        link: 'https://drive.google.com/file/d/1TTJPep2rD7-s2CsDUkptAlGhx7GEwzJG/view?usp=sharing' // replace with your actual link
    },
    {
        title: 'InnoServe Awards 2025 — Participation Nomination',
        link: 'https://innoserve.tca.org.tw/en/'
    },
    {
        title: 'HackElite — Finalist',
        link: 'https://drive.google.com/file/d/1-7Bd-WmS-VUHHxM6-n87gCI25HTC1oM5/view?usp=sharing'
    },
    {
        title: 'PearlHack — Semi-Finalist',
        link: 'https://www.linkedin.com/posts/gayanigunasekara_excited-to-share-that-innovatehers-has-activity-7283353005733593089-9oHF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL6RiABQSW_ItwUdJrRczRXpnO7Cj36BKo'
    },
    {
        title: 'Idealize 2025 — Proposal Winner',
        link: 'https://www.linkedin.com/posts/gayanigunasekara_idealize2025-ridesync-innovation-activity-7364231896920190977-gGYQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL6RiABQSW_ItwUdJrRczRXpnO7Cj36BKo'
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
