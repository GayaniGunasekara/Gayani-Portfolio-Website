import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="mt-12 py-6 text-center text-slate-400">
            <div className="container mx-auto">
                <div>© {year} Gayani Malsha — Software Engineer Intern</div>
                <div className="mt-2 text-sm">Certifications: Azure, Oracle, Cisco.</div>
            </div>
        </footer>
    )
}
