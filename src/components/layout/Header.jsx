import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `site-nav__link${isActive ? " site-nav__link--active" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `site-nav__link${isActive ? " site-nav__link--active" : ""}`
          }
        >
          Cart
        </NavLink>
      </nav>
    </header>
  );
}
