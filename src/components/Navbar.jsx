import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { Search as SearchIcon, ShoppingCart, User } from "lucide-react";
import logo from '../assets/logo-header.png';

function Navbar() {
  const [search, setSearch] = useState("");

  const links = [
    { to: '/', label: 'Home' },
    { to: '/catalog', label: 'Catalog' },
    { to: '/shop', label: 'Shop' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <img src={logo} alt="Arzon Market" className="w-24 h-10" />
          </NavLink>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 transition ${isActive ? "font-semibold text-blue-600" : ""}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-blue-600 transition">
              <SearchIcon className="w-5 h-5" />
            </button>
            <button className="relative text-gray-600 hover:text-blue-600 transition">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">2</span>
            </button>
            <button className="text-gray-600 hover:text-blue-600 transition">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH ONLY */}
        <div className="md:hidden flex items-center gap-3 py-3">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <img src={logo} alt="Arzon Market" className="w-24 h-10" />
          </NavLink>

          {/* Search with icon */}
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Искать продукты..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-3 px-4 pr-12 rounded-xl border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;