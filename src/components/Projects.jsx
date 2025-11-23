import React from 'react'
import { motion } from 'framer-motion'

const projects = [
    {
        name: 'EleFence360',
        desc: 'IoT-based system with a mobile app to detect and deter elephants, while monitoring electric fence status and sending real-time safety alerts via Firebase.(Capstone Group Project)',
        contrib: [
            'Led the project as the team leader and designed the overall system architecture.',
            'Contributed to system design in Figma, front-end and mobile app development.',
            'Individually developed the Vibration Detection and Sound repellent Module Using Vibration Sensors and Speaker Buzzer.',
            'Integrated all IoT components for Real-Time Data Communication.',
            'Achieved 100% real-time communication and high detection accuracy using Firebase-based data transfer.'
        ],
        tech: ['IoT', 'Flutter', 'Firebase'],
        github: 'https://github.com/GayaniGunasekara/EleFence360',
        demo: 'https://youtu.be/BJ5XGb5v0k8?si=j5YWz0XmBGPUJMri'
    },
    {
        name: 'RideSync',
        desc: 'Full Stack Web platform for connecting motor servicing and Repair Centers and Vehicle Owners.(Ongoing - Individual Project developing for Ajith Motor Works-padukka )',
        contrib: [
            'Stakeholder Communication, Requirement Gathering and Analysis, Innovative Solution Designing.',
            'Overall Project Design, Planning and development.',
            'Designed the UI/UX in Figma and created interactive Prototypes.',
            'Implemented the frontend using React.',
            'Built all modules using OOP concepts.',
            'Working on PostgreSQL database design and API integration.'
        ],
        tech: ['React', 'Node.js', 'PostgreSQL'],
        github: 'https://github.com/GayaniGunasekara/RideSync',
        demo: 'https://www.figma.com/proto/ktzwk6mpX6sgJgTLGbiqcd/RideSync'
    },
    {
        name: 'PureHarvest',
        desc: 'Business platform for organic productions (Individual Project)',
        contrib: [
            'Innovative Solution Designing.',
            'Overall Project Design, Planning and development.',
            'Designed the UI/UX in Figma and created interactive Prototypes.',
            'Set up full-stack architecture with React and Node.js.',
            'Handling MySQL integration for hybrid data flow.',
            'Implemented user authentication and dashboard UI.'
        ],
        tech: ['React', 'Node.js', 'MySQL', 'Figma'],
        github: 'https://github.com/GayaniGunasekara/PureHarvest',
        demo: 'https://www.figma.com/proto/SJMJzPcnb8DO128WMpx2R9/PureHarvest'
    },
    {
        name: 'PredictHR',
        desc: 'An end-to-end solution to predict employee attrition, performing an end-to-end pipeline including EDA,preprocessing, model training, and deployment via a Streamlit web app for real-time predictions ( Individual Project).',
        contrib: [
            'Performed data preprocessing and feature engineering.',
            'Trained models using scikit-learn (Logistic Regression, Random Forest).',
            'Deployed the Streamlit web app for interactive predictions.'
        ],
        tech: ['Python', 'scikit-learn', 'Streamlit', 'pandas', 'numpy', 'mataplotlib', 'Jupyter Notebook'],
        github: 'https://github.com/GayaniGunasekara/Employee_Attrition_Prediction_ML_Project',
        demo: 'https://www.linkedin.com/posts/gayanigunasekara_machinelearning-python-streamlit-activity-7379231778257080320-6AMO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL6RiABQSW_ItwUdJrRczRXpnO7Cj36BKo'
    }
    ,
    {
        name: '  SkyPulse',
        desc: ' A desktop app to provide real-time weather information by city, including temperature, humidity, wind,speed, pressure, weather description, and local time, all within a user-friendly graphical interface.(Individual Project)',
        contrib: [
            'Designed and implemented a clean GUI using Tkinter and Pillow (PIL).',
            'Integrated OpenWeatherMap API for accurate weather data retrieval.',
            'Implemented location detection using Geopy and timezone handling via pytz.',
            'Optimized code for fast and smooth real-time updates.'
        ],
        tech: ['Python', 'Tkinter', 'Pillow', 'Requests', 'Geopy', 'TimezoneFinder', 'pytz', 'OpenWeatherMap API'],
        github: 'https://github.com/GayaniGunasekara/Weather_Application',
        demo: 'https://www.linkedin.com/posts/gayanigunasekara_python-tkinter-weatherapp-activity-7373390923268845568-42nx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL6RiABQSW_ItwUdJrRczRXpnO7Cj36BKo'
    }
    ,
    {
        name: "Students’ Colours Management System",
        desc: "Developed a web-based application for the Sports Center of Sabaragamuwa University to manage students' sports achievements and awards efficiently.(Group Project)",
        contrib: [
            "Contributed to project planning and requirement analysis.",
            "Designed and developed the frontend using HTML, CSS, and JavaScript.",
            "Collaborated with team members for database integration using PHP and MySQL.",
            "Ensured the UI was simple, structured, and user-friendly for administrative staff."
        ],
        tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        github: "https://github.com/Menuka7865/Student-s-colors-management-System",
        demo: "#"
    },
    {
        name: "Community Project - Haldummulla Veterinary Services Web Portal",
        desc: "A community web platform for the Haldummulla Veterinary Office to provide information, manage appointments, and support local farmers through educational content.(Ongoing Group Project)",
        contrib: [
            "Served as the Team Leader and led stakeholder discussions and requirement analysis.",
            "Designed the overall system architecture and database structure.",
            "Contributed to frontend design and API integration using React and Axios.",
            "Supervised the team’s progress and maintained collaboration using Git and GitHub.",
            "Continuing development as part of an ongoing community engagement project."
        ],
        tech: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Axios",
            "Figma",
            "Postman",
            "Git",
            "GitHub"
        ],
        github: "https://github.com/Menuka7865/Haldummulla-Veterinary-Services-Web-Portal-", // replace with actual repo if available
        demo: "#"
    },
    {
        name: 'Library Management System',
        desc: 'A CLI-based application built using Object-Oriented Programming to manage books, members, and loans efficiently with database connectivity.(Individual Project)',
        contrib: [
            'Developed CRUD operations for book, member, and loan records.',
            'Implemented real-time interaction with MySQL database.',
            'Designed an intuitive CLI for easy user navigation.',
            'Applied OOP principles to ensure modular, maintainable code structure.'
        ],
        tech: ['Java', 'MySQL'],
        github: 'https://github.com/GayaniGunasekara/Library-Management-System', // update link if needed
        demo: 'https://www.linkedin.com/posts/gayanigunasekara_java-mysql-oop-activity-7246776778340360192--Q2l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL6RiABQSW_ItwUdJrRczRXpnO7Cj36BKo'
    },
    {
        name: 'To-Do List Application',
        desc: 'A responsive web app for managing daily tasks with features like drag-and-drop, due date reminders, dark mode, and local data storage.(Individual Project)',
        contrib: [
            'Designed an interactive and minimalist user interface.',
            'Implemented task creation, editing, and drag-and-drop reordering.',
            'Added due date reminders and dark mode for better usability.',
            'Used localStorage for persistent data saving.'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/GayaniGunasekara/To-Do-List', // update link if needed
        demo: 'https://www.linkedin.com/posts/gayanigunasekara_javascript-selftaughtdev-github-activity-7323417956112109568-oB2M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL6RiABQSW_ItwUdJrRczRXpnO7Cj36BKo'
    },
    {
        name: 'Heaven Delight Bakes website',
        desc: 'A responsive website showcasing bakery products with smooth navigation and engaging UI components.( Individual Project)',
        contrib: [
            'Designed and developed the website layout and visual theme.',
            'Implemented product sections with hover effects and smooth navigation.',
            'Enhanced user engagement with interactive animations and responsive design.',
            'Optimized website performance for faster loading and seamless browsing.'
        ],
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/GayaniGunasekara/Heaven-Delight-Bakes', // update link if needed
        demo: 'https://www.linkedin.com/posts/gayanigunasekara_webdesign-webdevelopment-studentwork-activity-7235249655310114817-pHOA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEL6RiABQSW_ItwUdJrRczRXpnO7Cj36BKo'
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

                                <div className="mt-2">
                                    <p className="text-sm font-medium text-slate-200">Contributions:</p>
                                    <ul className="list-disc list-inside text-sm text-slate-400 mt-1 space-y-1">
                                        {p.contrib.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-3 flex gap-2 flex-wrap">
                                    {p.tech.map(t => (
                                        <span
                                            key={t}
                                            className="text-xs px-2 py-1 bg-slate-700 rounded"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <a
                                    href={p.github}
                                    className="text-xs px-3 py-1 bg-slate-800 rounded hover:bg-slate-700"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={p.demo}
                                    className="text-xs px-3 py-1 bg-accent rounded text-white hover:brightness-95"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
