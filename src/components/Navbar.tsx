import { useState } from "react";
import { Menu, X, Home, Recycle, Truck, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", hash: "", label: "Home", icon: <Home className="w-5 h-5" /> },
    { path: "/dashboard#sorting", hash: "sorting", label: "Sorting Guide", icon: <Recycle className="w-5 h-5" /> },
    { path: "/dashboard#pickup", hash: "pickup", label: "Request Pickup", icon: <Truck className="w-5 h-5" /> },
    { path: "/dashboard#profile", hash: "profile", label: "My Dashboard", icon: <User className="w-5 h-5" /> },
  ];

  const isActive = (hash: string) => {
    const currentHash = location.hash.replace("#", "") || "";
    return currentHash === hash;
  };

  return (
    <nav className="bg-eco-primary shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white text-2xl font-bold flex items-center gap-2">
              <Recycle className="h-8 w-8" />
              EcoBlock
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path + item.hash}
                to={item.path + (item.hash ? `#${item.hash}` : "")}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.hash)
                    ? "bg-eco-dark text-white"
                    : "text-eco-light hover:bg-eco-dark/20 hover:text-white"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-eco-light hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2"
              aria-expanded="false"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-eco-primary border-t border-eco-dark/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path + item.hash}
                to={item.path + (item.hash ? `#${item.hash}` : "")}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(item.hash)
                    ? "bg-eco-dark text-white"
                    : "text-eco-light hover:bg-eco-dark/20 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;