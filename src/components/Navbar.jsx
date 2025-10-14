import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
    const items = [
        { name: 'Home', to: 'home' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Achievements', to: 'achievements' },
        { name: 'Certifications', to: 'certifications' },
        { name: 'Volunteer Experience', to: 'Volunteer' },
        { name: 'Contact', to: 'contact' }
    ]

    return (
        <nav className="fixed top-4 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-2 glass rounded-2xl flex justify-center">

                {/* Centered and responsive items */}
                <div className="hidden md:flex justify-center gap-15 lg:gap-20 xl:gap-24 items-center">
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

                {/* Mobile menu */}
                <div className="md:hidden text-sm text-slate-400">menu</div>
            </div>
        </nav>
    )
}
