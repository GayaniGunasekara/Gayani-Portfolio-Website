// src/components/VolunteerExperience.jsx
import React from 'react'

const volunteerExperiences = [
    {
        title: 'Committee Member 2024/25 - IEEE WIE Student Branch Affinity Group of Sabaragamuwa University of Sri Lanka',
        link: 'https://www.ieee.org/membership/women/index.html' // example link
    },
    {
        title: 'Mathematics Teaching - Sasnaka Sansada - Ganitha Sawiya (2021–Present)',
        link: 'https://www.sasnaka.org/' // example link
    }
]

export default function VolunteerExperience() {
    return (
        <section id="volunteer-experience" className="py-12">
            <h2 className="text-2xl font-bold mb-4">Volunteer Experience</h2>

            <div className="grid sm:grid-cols-2 gap-4">
                {volunteerExperiences.map((v, idx) => (
                    <a
                        key={idx}
                        href={v.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 glass rounded-lg hover:bg-slate-800 transition block"
                    >
                        <div className="font-medium text-slate-200 hover:underline">
                            {v.title}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
