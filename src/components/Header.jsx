import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="container nav">
        <div className="brand">
          <Link to="/" onClick={closeMenu}>Innosim Design AB</Link>
        </div>
        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav aria-label="Primary" className={open ? 'open' : ''}>
          <ul className="menu" onClick={closeMenu}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li className="menu-group">
              <button className="menu-toggle" aria-haspopup="true" aria-expanded="false">Our services</button>
              <ul className="submenu" aria-label="Our services">
                <li><NavLink to="/our-services/full-mro-capability">Full MRO Capability</NavLink></li>
                <li><NavLink to="/our-services/field-services">Field services</NavLink></li>
                <li><NavLink to="/our-services/spare-parts">Spare parts</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/approvals-and-certificates">Approvals & certificates</NavLink></li>
            <li><NavLink to="/capability-list">Capability List</NavLink></li>
            <li className="menu-group">
              <button className="menu-toggle" aria-haspopup="true" aria-expanded="false">About</button>
              <ul className="submenu" aria-label="About">
                <li><NavLink to="/about">About us</NavLink></li>
                <li><NavLink to="/sustainability">Sustainability</NavLink></li>
                <li><NavLink to="/safety-policy">Safety Policy</NavLink></li>
              </ul>
            </li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
