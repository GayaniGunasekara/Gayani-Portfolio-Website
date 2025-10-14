import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="mt-12 py-6 text-center text-slate-400">
            <div className="container mx-auto">
                <div>© {year} Gayani Malsha Gunasekara— CIS Undergraduate-SUSL</div>

            </div>
        </footer>
    )
}
