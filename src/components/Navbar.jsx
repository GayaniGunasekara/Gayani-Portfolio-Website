import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
    const items = [
        { name: 'Home', to: 'home' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Achievements', to: 'achievements' },
        { name: 'Certifications', to: 'certifications' }, // added this
        { name: 'Contact', to: 'contact' } // keep only one Contact
    ]

    return (
        <nav className="fixed top-4 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-4 py-2 glass rounded-2xl">

                <div className="hidden md:flex gap-6 items-center">
                    {items.map(i => (
                        <ScrollLink
                            key={i.to}
                            to={i.to}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="cursor-pointer hover:text-brand"
                        >
                            {i.name}
                        </ScrollLink>
                    ))}
                </div>
                <div className="md:hidden text-sm text-slate-400">menu</div>
            </div>
        </nav>
    )
}
