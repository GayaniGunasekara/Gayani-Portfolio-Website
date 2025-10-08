import React from 'react'
import { motion } from 'framer-motion'

const projects = [
    {
        name: 'EleFence360',
        desc: 'Automated Elephant Detection, Deterrence & Monitoring (IoT + Mobile). Winner NBQSA 2025.',
        tech: ['IoT', 'Flutter', 'Firebase'],
        github: 'https://github.com/GayaniGunasekara/EleFence360',
        demo: 'https://youtu.be/BJ5XGb5v0k8?si=j5YWz0XmBGPUJMri'
    },
    {
        name: 'RideSync',
        desc: 'Web platform for motor servicing — scheduling, stock & employee management (Ongoing).',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        github: 'https://github.com/GayaniGunasekara/RideSync',
        demo: 'https://www.figma.com/proto/ktzwk6mpX6sgJgTLGbiqcd/RideSync'
    },
    {
        name: 'PureHarvest',
        desc: 'Business platform for organic products (Ongoing) — product auth & AI recommendations.',
        tech: ['React', 'Node.js', 'MySQL', 'Firebase'],
        github: 'https://github.com/GayaniGunasekara/PureHarvest',
        demo: 'https://www.figma.com/proto/SJMJzPcnb8DO128WMpx2R9/PureHarvest'
    },
    {
        name: 'Employee Attrition ML',
        desc: 'End-to-end ML pipeline + deployed Streamlit app for attrition prediction.',
        tech: ['Python', 'scikit-learn', 'Streamlit'],
        github: 'https://github.com/GayaniGunasekara/Employee_Attrition_Prediction_ML_Project',
        demo: 'https://github.com/GayaniGunasekara/Employee_Attrition_Prediction_ML_Project'
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-12">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                    <motion.div
                        key={p.name}
                        initial={{ y: 12, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="p-6 glass rounded-lg"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-semibold">{p.name}</h3>
                                <p className="text-sm text-slate-300 mt-2">{p.desc}</p>
                                <div className="mt-3 flex gap-2 flex-wrap">
                                    {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-slate-700 rounded">{t}</span>)}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <a href={p.github} className="text-xs px-3 py-1 bg-slate-800 rounded hover:bg-slate-700" target="_blank" rel="noreferrer">GitHub</a>
                                <a href={p.demo} className="text-xs px-3 py-1 bg-accent rounded text-white hover:brightness-95" target="_blank" rel="noreferrer">Demo</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
