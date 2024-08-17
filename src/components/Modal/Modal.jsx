import { useState } from "react";
import Features from "../Features/Features.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import BookingForm from "../BookingForm/BookingForm.jsx";
import { GoStarFill } from "react-icons/go";
import sprite from "../../assets/icons/sprite.svg";
import clsx from "clsx";
import css from "./Modal.module.css";
import { createPortal } from "react-dom";

const Modal = ({ item, closeModal }) => {
  const [option, setOption] = useState("features");

  const modalElement = document.getElementById("modal");

  return createPortal(
    <section className={css.container}>
      <button className={css.modalCloseBtn} type="button" onClick={closeModal}>
        <svg className={css.modalCloseIcon}>
          <use xlinkHref={`${sprite}#icon-close`}></use>
        </svg>
      </button>
      <h2 className={css.title}>{item.name}</h2>
      <div className={css.rateWrapper}>
        <p className={css.rate}>
          <GoStarFill className={css.star} />
          {item.rating} ({item.reviews.length} Reviews)
        </p>
        <div className={css.locationWrapper}>
          <svg className={css.locationIcon}>
            <use xlinkHref={`${sprite}#icon-map-pin`}></use>
          </svg>
          <p className={css.location}>{item.location}</p>
        </div>
      </div>
      <p className={css.price}>€{item.price}.00</p>

      <ul className={css.imgContainer}>
        {item.gallery.map((el, idx) => {
          return (
            <li key={idx}>
              <img
                src={el}
                alt="Camper image"
                width={290}
                height={310}
                className={css.camperImage}
              />
            </li>
          );
        })}
      </ul>
      <p className={css.description}>{item.description}</p>
      <div className={css.titlesWrapper}>
        <button
          className={clsx(css.subtitle, option === "features" && css.active)}
          onClick={() => {
            setOption("features");
          }}
        >
          Features
        </button>
        <button
          className={clsx(css.subtitle, option === "reviews" && css.active)}
          onClick={() => {
            setOption("reviews");
          }}
        >
          Reviews
        </button>
      </div>
      <div className={css.infoWrapper}>
        {option === "features" ? (
          <Features item={item} />
        ) : (
          <Reviews item={item} />
        )}
        <BookingForm />
      </div>
    </section>,
    modalElement
  );
};

export default Modal;
