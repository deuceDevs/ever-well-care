import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: install with `npm install lucide-react`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-3xl font-bold text-purple-950 font-poppins">
        EverWellCare
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        }  absolute top-16 left-0 w-full bg-white shadow-md md:shadow-none md:bg-transparent md:static md:flex md:space-x-4 md:ml-8 text-sm font-medium md:items-center z-50 justify-end`}
      >
        <li className="p-4 md:p-0">
          <Link to="/" className="hover:text-purple-500 block">
            Home
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link to="/about" className="hover:text-purple-500 block">
            About
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link to="/blogs" className="hover:text-purple-500 block">
            Blogs
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link to="/contact" className="hover:text-purple-500 block">
            Contact
          </Link>
        </li>
        <li className="p-4 md:p-0">
          <Link to="/map" className="hover:text-purple-500 block">
            Locations
          </Link>
        </li>
      </ul>
    </nav>
  );
}
