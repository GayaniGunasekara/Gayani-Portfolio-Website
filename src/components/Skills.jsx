// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Programming",
        skills: [
            { name: "Python", level: "Intermediate" },
            { name: "Java", level: "Intermediate" },
            { name: "JavaScript", level: "Intermediate" },
            { name: "C", level: "Intermediate" },
            { name: "PHP", level: "Beginner" },
        ],
    },
    {
        title: "Web Development",
        skills: [
            { name: "HTML", level: "Advanced" },
            { name: "CSS", level: "Advanced" },
            { name: "Tailwind CSS", level: "Intermediate" },
            { name: "React.js", level: "Intermediate" },
            { name: "Node.js", level: "Beginner" },
            { name: "REST APIs", level: "Intermediate" },
        ],
    },
    {
        title: "Mobile Development",
        skills: [{ name: "Flutter", level: "Intermediate" }],
    },
    {
        title: "Databases",
        skills: [
            { name: "MySQL", level: "Advanced" },
            { name: "Firebase", level: "Intermediate" },
            { name: "PostgreSQL", level: "Beginner" },
        ],
    },
    {
        title: "Version Control Tools",
        skills: [
            { name: "Git", level: "Advanced" },
            { name: "GitHub", level: "Advanced" },
            { name: "Git Bash", level: "Intermediate" },
        ],
    },
    {
        title: "Software Engineering Concepts",
        skills: [
            { name: "OOP", level: "Advanced" },
            { name: "SDLC", level: "Advanced" },
            { name: "Agile Methodology", level: "Advanced" },
            { name: "Data Structures & Algorithms", level: "Advanced" },
            { name: "Problem-Solving", level: "Advanced" },
        ],
    },
    {
        title: "Project Management & Collaboration:",
        skills: [
            { name: "Jira", level: "Intermediate" },
            { name: "Trello", level: "Intermediate" },
            { name: "Confluence", level: "Intermediate" },
            { name: "Google Workspace", level: "Advanced" },
            { name: "Stakeholder Communication", Level: "Advanced" },
            { name: "Process Modeling", Level: "Intermediate" },
            { name: "Requirement Gathering", Level: "Advanced" },
            { name: "Documentation", Level: "Advanced" }

        ]
    },
    {
        title: "Development Tools",
        skills: [
            { name: "Visual Studio Code", level: "Advanced" },
            { name: "IntelliJ IDEA", level: "Intermediate" },
            { name: "Xampp Server", level: "Intermediate" },
            { name: "Arduino IDE", level: "Intermediate" },
        ],
    },
    {
        title: "UI/UX & Design",
        skills: [
            { name: "Figma", level: "Intermediate" },
            { name: "Draw.io", level: "Intermediate" },
            { name: "Canva", level: "Advanced" },
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: [
            { name: "Azure", level: "Beginner" },
            { name: "Google Cloud", level: "Beginner" },
            { name: "CI/CD ", level: "Beginner" },
        ],
    },
    {
        title: "Embedded Systems",
        skills: [
            { name: "IoT", level: "Intermediate" },
            { name: "Arduino Programming", level: "Advanced" },
            { name: "Sensor Integration", level: "Intermediate" },
        ],
    },
    {
        title: "Data Analysis & Manipulation",
        skills: [
            { name: "NumPy", level: "Intermediate" },
            { name: "Pandas", level: "Intermediate" },
        ],
    },
    {
        title: "Data Visualization",
        skills: [
            { name: "Looker Studio", level: "Intermediate" },
            { name: "Tableau", level: "Beginner" },
        ],
    },
    {
        title: "Machine Learning",
        skills: [
            { name: "Scikit-learn (Regression, Classification, Clustering)", level: "Beginner" },
        ],
    },
    {
        title: "Other Tools",
        skills: [
            { name: "Jupyter Notebook", level: "Intermediate" },
            { name: "Google Colab", level: "Intermediate" },
            { name: "Excel", level: "Advanced" },
        ],
    },

];

export default function Skills() {
    return (
        <section id="skills" className="py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>

                {skillCategories.map((category) => (
                    <div key={category.title} className="mb-10">
                        {/* Category Title */}
                        <h3 className="text-xl font-semibold mb-4 text-slate-400 border-l-4 border-sky-500 pl-3">
                            {category.title}
                        </h3>

                        {/* Skill Boxes */}
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {category.skills.map((skill, idx) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ y: 8, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="p-4 glass rounded-lg flex items-center justify-between bg-white shadow-md hover:shadow-lg transition duration-300"
                                >
                                    <div>
                                        <div className="font-medium">{skill.name}</div>
                                        <div className="text-xs text-slate-500">
                                            {skill.level}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
