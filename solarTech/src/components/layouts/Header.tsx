import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import Button from "../UI/Button";
import Container from "../UI/Container";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:rounded-full after:bg-blue-600 after:transition-all after:content-[''] ${
      isActive
        ? "text-blue-600 after:w-full"
        : "text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-gray-900"
          onClick={() => setIsOpen(false)}
        >
          GK <span className="text-blue-600">India</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className={linkClasses}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link to="/contact" className="hidden md:block">
          <Button
            variant="gradient"
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-6 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-transform hover:scale-[1.03]"
          >
            Get Quote
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-gray-700 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2"
            >
              <Button
                variant="gradient"
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-sm font-semibold text-white"
              >
                Get Quote
              </Button>
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
