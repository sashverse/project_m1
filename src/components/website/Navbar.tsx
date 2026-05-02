import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: any) => {
    // Implement navigation logic here, e.g., using React Router's useHistory
    navigate(path);
  };


  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold text-[#0A2540] tracking-wide cursor-pointer" onClick={() => handleNavigation("/")}>
          Project M1
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li onClick={() => handleNavigation("/")} className="relative group cursor-pointer">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0A2540] transition-all group-hover:w-full"></span>
          </li>
          <li onClick={() => handleNavigation("/about")} className="relative group cursor-pointer">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0A2540] transition-all group-hover:w-full"></span>
          </li>
          <li onClick={() => handleNavigation("/contact")} className="relative group cursor-pointer">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#0A2540] transition-all group-hover:w-full"></span>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button onClick={() => navigate('/login')} className="mt-2 px-4 py-2 rounded-full">
            Login
          </button>
          <button onClick={() => navigate('/register')} className="mt-2 bg-[#0A2540] text-white px-4 py-2 rounded-full">
            Register
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li className="hover:text-[#0A2540] cursor-pointer">Home</li>
            <li className="hover:text-[#0A2540] cursor-pointer">About</li>
            <li className="hover:text-[#0A2540] cursor-pointer">Contact</li>
            <button onClick={() => navigate('/login')} className="mt-2 px-4 py-2 rounded-full">
              Login
            </button>
            <button onClick={() => navigate('/register')} className="mt-2 bg-[#0A2540] text-white px-4 py-2 rounded-full">
              Register
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;