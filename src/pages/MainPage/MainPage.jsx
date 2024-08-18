import css from "./MainPage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <h1>Welcome to Camper Rentals</h1>
        <p>
          Your adventure starts here. Explore our range of campervans available
          for rent in Ukraine.
        </p>
      </header>
      <section className={css.services}>
        <h2>Our Services</h2>
        <div className={css.service}>
          <h3>Wide Range of Campers</h3>
          <p>
            Choose from a variety of well-equipped campers suited for all types
            of adventures.
          </p>
        </div>
        <div className={css.service}>
          <h3>24/7 Support</h3>
          <p>
            We offer round-the-clock support to ensure you have a smooth
            experience during your trip.
          </p>
        </div>
        <div className={css.service}>
          <h3>Flexible Booking</h3>
          <p>
            Book your camper with flexible options to match your travel plans
            and preferences.
          </p>
        </div>
      </section>
      <div className={css.buttonContainer}>
        <Link to="/catalog" className={css.catalogButton}>
          Go to Catalog
        </Link>
      </div>
      <footer className={css.footer}>
        <p>© 2024 Camper Rentals. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
