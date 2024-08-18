import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/campers/slice.js";
import css from "./Filters.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { FiMapPin } from "react-icons/fi";

const Filters = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(setFilters(data));
  };

  return (
    <section className={css.container}>
      <form className={css.filtersForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.locationLabel} htmlFor="location">
          Location
          <div className={css.inputWrapper}>
            <FiMapPin className={css.icon} />
            <input
              id="location"
              className={css.locationInput}
              type="text"
              {...register("location")}
              placeholder="City"
            />
          </div>
        </label>

        <p className={css.filtersText}>Filters</p>

        <fieldset className={css.equipmentFieldset}>
          <legend className={css.equipmentLegend}>Vehicle equipment</legend>
          <div className={css.checkboxWrapper}>
            <label className={css.checkboxLabel} htmlFor="ac">
              <div className={css.wrapper}>
                <svg className={css.checkboxIcon}>
                  <use xlinkHref={`${sprite}#icon-acc`}></use>
                </svg>
                <span className={css.checkboxSpan}>AC</span>
              </div>
            </label>

            <label className={css.checkboxLabel} htmlFor="automatic">
              <div className={css.wrapper}>
                <svg className={css.checkboxIcon}>
                  <use xlinkHref={`${sprite}#icon-automatic`}></use>
                </svg>
                <span className={css.checkboxSpan}>Automatic</span>
              </div>
            </label>

            <label className={css.checkboxLabel} htmlFor="kitchen">
              <div className={css.wrapper}>
                <svg className={css.checkboxIcon}>
                  <use xlinkHref={`${sprite}#icon-kitchen`}></use>
                </svg>
                <span className={css.checkboxSpan}>Kitchen</span>
              </div>
            </label>

            <label className={css.checkboxLabel} htmlFor="tv">
              <div className={css.wrapper}>
                <svg className={css.checkboxIcon}>
                  <use xlinkHref={`${sprite}#icon-tv`}></use>
                </svg>
                <span className={css.checkboxSpan}>TV</span>
              </div>
            </label>

            <label className={css.checkboxLabel} htmlFor="shower">
              <div className={css.wrapper}>
                <svg className={css.checkboxIcon}>
                  <use xlinkHref={`${sprite}#icon-shower`}></use>
                </svg>
                <span className={css.checkboxSpan}>Shower</span>
              </div>
            </label>
          </div>
        </fieldset>

        <fieldset className={css.typeFieldset}>
          <legend className={css.typeLegend}>Vehicle type</legend>

          <div className={css.radioWrapper}>
            <label className={css.radioLabel} htmlFor="van">
              <div className={css.wrapper}>
                <svg className={css.radioIcon}>
                  <use xlinkHref={`${sprite}#icon-camper-v`}></use>
                </svg>
                <span className={css.radioSpan}>Van</span>
              </div>
            </label>

            <label className={css.radioLabel} htmlFor="integrated">
              <div className={css.wrapper}>
                <svg className={css.radioIcon}>
                  <use xlinkHref={`${sprite}#icon-camper-i`}></use>
                </svg>
                <span className={css.radioSpan}>Fully Integrated</span>
              </div>
            </label>

            <label className={css.radioLabel} htmlFor="alcove">
              <div className={css.wrapper}>
                <svg className={css.radioIcon}>
                  <use xlinkHref={`${sprite}#icon-camper-a`}></use>
                </svg>
                <span className={css.radioSpan}>Alcove</span>
              </div>
            </label>
          </div>
        </fieldset>

        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </section>
  );
};

export default Filters;
