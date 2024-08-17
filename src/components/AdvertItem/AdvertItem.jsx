import { useCallback } from 'react';
import Modal from "../Modal/Modal.jsx";
import { useForModal } from "../../helpers/useForModal.jsx";
import Categories from "../Categories/Categories.jsx";
import HeartBtn from "../HeartBtn/HeartBtn.jsx";
import sprite from "../../assets/icons/sprite.svg";
import css from "./AdvertItem.module.css";
import { GoStarFill } from "react-icons/go";

const AdvertItem = ({ item }) => {
  const setModal = useForModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(<Modal onClose={closeModal} item={item} closeModal={closeModal} />);
  }, [setModal, closeModal, item]);

  return (
    <div className={css.listItem}>
      <img
        src={item.gallery[0]}
        alt="Camper image"
        width={290}
        height={310}
        className={css.camperImage}
      />
      <div className={css.descriptionWrapper}>
        <div className={css.nameWrapper}>
          <h2 className={css.title}>{item.name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.price}>€{item.price}.00</p>
            <HeartBtn item={item} />
          </div>
        </div>
        <div className={css.ratingWrapper}>
          <p className={css.rating}>
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
        <p className={css.description}>{item.description}</p>
        <ul className={css.detailsList}>
          <li>
            <Categories icon="icon-user" title={`${item.adults} adults`} fill={true} />
          </li>
          <li>
            <Categories icon="icon-automatic" title={`${item.transmission}`} />
          </li>
          <li>
            <Categories icon="icon-petrol" title={(item.engine)} fill={true} />
          </li>
          {item.details.kitchen > 0 && (
            <li>
              <Categories icon="icon-kitchen" title="Kitchen" />
            </li>
          )}
          <li>
            <Categories icon="icon-bed" title={`${item.details.beds} beds`} />
          </li>
          {item.details.airConditioner > 0 && (
            <li>
              <Categories icon="icon-acc" title="AC" />
            </li>
          )}
        </ul>
        <button className={css.button} onClick={openModal}>
          Show more
        </button>
      </div>
      
    </div>
  );
};

export default AdvertItem;
