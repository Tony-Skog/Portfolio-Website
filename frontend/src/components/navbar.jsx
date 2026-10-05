import { useState } from 'react'
import { Link } from 'react-router'

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
]
// Navbar component with hamburger menu for a better mobile experience. 
// The menu is hidden by default and can be toggled open or closed by clicking the hamburger button. 
function Navbar() {
    const [open, setOpen] = useState(false)

    return(
        <nav className="navbar">
            <span className="navbar-initials">TS</span>
            <div className="hamburger-wrap">
                <span className="hamburger" aria-hidden="true">
                    <span className="hamburger-bar" />
                    <span className="hamburger-bar" />
                    <span className="hamburger-bar" />
                </span>
                <button
                    type="button"
                    className="hamburger-button"
                    aria-expanded={open}
                    aria-controls="navbar-menu"
                    aria-label="Toggle navigation"
                    onClick={() => setOpen(!open)}
                />
            </div>
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