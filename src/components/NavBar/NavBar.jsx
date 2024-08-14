import { Link, useLocation } from 'react-router-dom';
import css from './Navbar.module.css'; // Стилі для навігації

const Navbar = () => {
  const location = useLocation(); // Отримуємо поточний маршрут

  return (
    <nav className={css.navbar}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link
            to="/"
            className={`${css.navLink} ${location.pathname === '/' ? css.active : ''}`}
          >
            Main Page
          </Link>
        </li>
        <li className={css.navItem}>
          <Link
            to="/catalog"
            className={`${css.navLink} ${location.pathname === '/catalog' ? css.active : ''}`}
          >
            Camper Catalog
          </Link>
        </li>
        <li className={css.navItem}>
          <Link
            to="/favourites"
            className={`${css.navLink} ${location.pathname === '/favourites' ? css.active : ''}`}
          >
            Favourite Campers
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;