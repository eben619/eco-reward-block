import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-eco-primary text-2xl font-bold">
              EcoBlock
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-eco-dark hover:text-eco-primary transition-colors">
              Home
            </Link>
            <Link to="/sort" className="text-eco-dark hover:text-eco-primary transition-colors">
              Sort Guide
            </Link>
            <Link to="/dashboard" className="text-eco-dark hover:text-eco-primary transition-colors">
              Dashboard
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-eco-dark hover:text-eco-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className="block px-3 py-2 text-eco-dark hover:text-eco-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/sort"
              className="block px-3 py-2 text-eco-dark hover:text-eco-primary"
              onClick={() => setIsOpen(false)}
            >
              Sort Guide
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 text-eco-dark hover:text-eco-primary"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;