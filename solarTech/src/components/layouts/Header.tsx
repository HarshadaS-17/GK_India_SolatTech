import { Link, NavLink } from "react-router-dom";

import Button from "../UI/Button";
import Container from "../UI/Container";

const Header = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          GK India
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-blue-600"
                      : "text-gray-700 transition-colors hover:text-blue-600"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link to="/contact">
          <Button>Get Quote</Button>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
