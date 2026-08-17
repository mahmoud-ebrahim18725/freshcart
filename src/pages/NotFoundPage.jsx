import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="not-found-page" aria-labelledby="not-found-title">
      <h1 id="not-found-title">404 - Page Not Found</h1>
      <p>The page you requested could not be found.</p>
      <NavLink to="/" className="not-found-page__link">
        Go back home
      </NavLink>
    </section>
  );
}
