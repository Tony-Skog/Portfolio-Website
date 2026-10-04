import { useState } from 'react'
import { Link } from 'react-router'

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
]

function Navbar() {
    const [open, setOpen] = useState(false)

    return(
        <nav className="navbar">
            <span className="navbar-initials">TS</span>
            <button
                type="button"
                className="hamburger"
                aria-expanded={open}
                aria-controls="navbar-menu"
                aria-label="Toggle navigation"
                onClick={() => setOpen(!open)}
            >
                <span className="hamburger-bar" />
                <span className="hamburger-bar" />
                <span className="hamburger-bar" />
            </button>
            <ul id="navbar-menu" className={open ? 'navbar-menu is-open' : 'navbar-menu'}>
                {links.map((link) => (
                    <li key={link.to}>
                        <Link to={link.to} onClick={() => setOpen(false)}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar