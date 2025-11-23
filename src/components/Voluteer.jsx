// src/components/VolunteerExperience.jsx
import React from 'react'
import Skills from './Skills'

const volunteerExperiences = [
    {
        title: 'Committee Member 2024/25 - IEEE WIE Student Branch Affinity Group of Sabaragamuwa University of Sri Lanka',
        Skills: [
            "Assisted in organizing and coordinating technical workshops and networking events for 100+ students.",
            "Collaborated with the committee to manage event logistics, coordination, and outreach activities."
        ],
        link: 'https://www.linkedin.com/posts/ieee-wie-student-branch-affinity-group-of-susl_ieee-wie-ieeewie-activity-7242180455402258434-WfT3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL6RiABQSW_ItwUdJrRczRXpnO7Cj36BKo' // example link
    },
    {
        title: 'Mathematics Teaching - Sasnaka Sansada - Ganitha Sawiya (2021–Present)',
        Skills: [
            " Conduct mathematics lessons for school students as part of a community education initiative.",
            "Enhanced communication, interactive teaching, leadership, and collaboration skills through continuous volunteer engagement."
        ],
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
