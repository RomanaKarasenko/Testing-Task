import toast from "react-hot-toast";
import { useEffect, useState, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAdverts,
  selectFilters,
  selectLoading,
} from "../../redux/selectors.js";
import { fetchAllAdverts } from "../../redux/campers/operations.js";
import { resetFilters } from "../../redux/campers/slice.js";
import Loader from "../Loader/Loader.jsx";
import AdvertItem from "../AdvertItem/AdvertItem.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import css from "./AdvertsList.module.css";

const AdvertsList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const filters = useSelector(selectFilters);
  const [count, setCount] = useState(4);
  const [hasMounted, setHasMounted] = useState(false);
  const listRef = useRef(null);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    setCount(4);
    dispatch(resetFilters());
    dispatch(fetchAllAdverts());
    setHasMounted(true);
  }, [dispatch]);

  const filteredAdverts = useMemo(() => {
    const {
      location = "",
      details = {},
      form = "",
      transmission = "",
    } = filters;

    return adverts.filter((el) => {
      const advertLocation = el.location?.toLowerCase() || "";
      const advertDetails = el.details || {};
      const advertForm = el.form || "";
      const advertTransmission = el.transmission || "";

      const matchesLocation = advertLocation.includes(location.toLowerCase());

      const matchesForm = !form || advertForm === form;

      const matchesTransmission =
        !transmission || advertTransmission === transmission;

      const matchesEquipment = Object.keys(details).every(
        (key) => !details[key] || advertDetails[key] === 1
      );

      return (
        matchesLocation &&
        matchesEquipment &&
        matchesForm &&
        matchesTransmission
      );
    });
  }, [adverts, filters]);

  useEffect(() => {
    if (!hasMounted) return;

    if (filteredAdverts.length === 0) {
      toast.error("No adverts available.");
    } else if (count >= filteredAdverts.length) {
      toast.success("All adverts are loaded.");
    }
  }, [count, filteredAdverts.length, hasMounted]);

  useEffect(() => {
    if (count > 4) {
      setTimeout(() => {
        listRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
      }, 100);
    }
  }, [count]);

  const handleMoreBtnClick = () => {
    setCount((prevCount) => prevCount + 4);
  };

  return (
    <section className={css.container}>
      {loading ? (
        <Loader />
      ) : filteredAdverts.length > 0 ? (
        <>
          <ul className={css.list} ref={listRef}>
            {filteredAdverts.slice(0, count).map((item) => (
              <li key={item._id} className={css.item}>
                <AdvertItem item={item} />
              </li>
            ))}
          </ul>
          {count < filteredAdverts.length && (
            <LoadMoreBtn handleMoreBtnClick={handleMoreBtnClick} />
          )}
        </>
      ) : (
        <div className={css.empty}>
          <p className={css.emptyText}>
            No adverts are available at the moment.
          </p>
        </div>
      )}
    </section>
  );
};

export default AdvertsList;
