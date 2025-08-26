import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import logo from '../assets/logo-header.png';
function Navbar() {

    const [open, setOpen] = useState(false);

    const links = [
        {to: '/', label: 'Home'},
        {to: '/shop', label: 'shop'},
        {to: '/about', label: 'about'},
        {to: '/contact', label: 'contact'},
    ];

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* LOGO */}
                    <NavLink to='/' className="flex items-center gap-2 ">
                        <img src={logo} alt="Arzon Market" className="w-24 h-10" />
                        {/* <span className="text-xl font-bold text-gray-800">Arzon Market</span> */}
                    </NavLink>

                    {/* DESKTOP-LOGO */}
                    <nav className="hidden md:flex items-center gap-6">
                        {links.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                className={({isActive}) =>
                                `text-gray-700 hover:text-blue-600 transition ${
                                    isActive? "font-semibold text-blue-600" : ""
                                }`
                             }
                             >
                                {l.label}
                             </NavLink>
                        ))}
                    </nav>

                    {/* RIGHT ICONS */}
                    <div className="flex items-center gap-4">
                        <button className="text-gray-600 hover:text-blue-600 transition">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="relative text-gray-600 hover:text-blue-600 transition">
                            <ShoppingCart className="w-5 h-5"/>
                            {/* Badge with amount of items */}
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
                                2
                            </span>
                        </button>
                        <button className="text-gray-600 hover:text-blue-600 transition">
                            <User className="w-5 h-5"/>
                        </button>

                        {/* BURGER-MENU */}
                        <button
                            className="md:hidden text-gray-700 hover:text-blue-600 transition"
                            onClick={() => setOpen(!open)}
                        >
                            {open? <X className="w-6 h-6 " />  : <Menu className="w-6 h-6"/>}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU */}
            <div 
                className={`md:hidden fixed top-16 left-0 w-full bg-gray-100 shadow-md transform transition-transform duration-300
                    ${open ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <nav className="flex flex-col gap-4 p-4">
                    {links.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            className={({isActive}) => 
                                `text-gray-700 hover:text-blue-600 transition ${
                                    isActive? "font-semibold text-blue-600" : ""
                                }`
                            }
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;