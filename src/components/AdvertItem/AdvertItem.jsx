import React, { useState, useCallback } from "react";
import CustomModal from "../CustomModal/CustomModal";
import Categories from "../Categories/Categories";
import HeartBtn from "../HeartBtn/HeartBtn";
import CamperTabs from "../CamperTabs/CamperTabs";
import sprite from "../../assets/icons/sprite.svg";
import css from "./AdvertItem.module.css";
import { GoStarFill } from "react-icons/go";
import BookingForm from "../BookingForm/BookingForm";

const AdvertItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalHeight, setModalHeight] = useState(720);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleTabChange = (tab) => {
    if (tab === "reviews" || tab === "features") {
      setModalHeight(1288);
    }
  };

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
              <use xlinkHref={`${sprite}#icon-map-pin`} />
            </svg>
            <p className={css.location}>{item.location}</p>
          </div>
        </div>
        <p className={css.description}>{item.description}</p>
        <ul className={css.detailsList}>
          <li>
            <Categories
              icon="icon-user"
              title={`${item.adults} adults`}
              fill={true}
            />
          </li>
          <li>
            <Categories icon="icon-automatic" title={`${item.transmission}`} />
          </li>
          <li>
            <Categories icon="icon-petrol" title={item.engine} fill={true} />
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

      <CustomModal open={isModalOpen} onClose={closeModal} height={modalHeight}>
        <div className={css.modalContent}>
          <div className={css.modalTop}>
            <div className={css.imageGallery}>
              {item.gallery.slice(0, 3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Camper image ${index + 1}`}
                  width={290}
                  height={310}
                  className={css.modalImage}
                />
              ))}
            </div>
            <div className={css.modalDetails}>
              <h2>{item.name}</h2>
              <p>Price: €{item.price}.00</p>
              <p>
                Rating: {item.rating} ({item.reviews.length} Reviews)
              </p>
              <p>Location: {item.location}</p>
              <p>{item.description}</p>
              <ul>
                <li>Adults: {item.adults}</li>
                <li>Transmission: {item.transmission}</li>
                <li>Engine: {item.engine}</li>
                {item.details.kitchen > 0 && <li>Kitchen: Yes</li>}
                <li>Beds: {item.details.beds}</li>
                {item.details.airConditioner > 0 && <li>AC: Yes</li>}
              </ul>
            </div>
          </div>
          <div className={css.modalBottom}>
            <CamperTabs item={item} onTabChange={handleTabChange} />
            <div className={css.bookingFormWrapper}>
              <BookingForm />
            </div>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default AdvertItem;
