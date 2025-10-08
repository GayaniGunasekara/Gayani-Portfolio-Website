import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
    ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    ['Flutter', 'Dart', 'Firebase'],
    ['Python', 'Java', 'C', 'SQL'],
    ['Node.js', 'Express', 'MySQL', 'PostgreSQL']
]

export default function Skills() {
    return (
        <section id="skills" className="py-12">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillGroups.flat().map((s, idx) => (
                    <motion.div
                        key={s}
                        initial={{ y: 8, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.04 }}
                        className="p-4 glass rounded-lg flex items-center justify-between"
                    >
                        <div>
                            <div className="font-medium">{s}</div>
                            <div className="text-xs text-slate-400">Proficient</div>
                        </div>
                        <div className="text-xs px-3 py-1 rounded bg-slate-700 text-slate-200">★ ★ ★ ★</div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
