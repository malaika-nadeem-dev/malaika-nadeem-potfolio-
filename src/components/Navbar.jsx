import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">

      {/* Logo */}

      <div className="logo">
        Malaika<span>.</span>
      </div>


      {/* Navigation Links */}

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

        <li>
          <a href="/" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="/#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="/#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="/#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

       <li>
          <a href="/#services" onClick={closeMenu}>
            Services
          </a>
        </li>

        <li>
          <a href="/#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

      </ul>


      {/* Let's Talk Button */}

      <a
        href="/#contact"
        className="nav-button"
        onClick={closeMenu}
      >
        <span className="get-text">
          Let's Talk
        </span>

        <span className="button-arrow">
          →
        </span>
      </a>


      {/* Mobile Menu */}

      <button
        type="button"
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </nav>
  );
}

export default Navbar;