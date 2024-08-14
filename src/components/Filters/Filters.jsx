import { useForm } from 'react-hook-form';
import css from './Filters.module.css';
import sprite from '../../assets/icons/sprite.svg';
/*import { FiMapPin } from "react-icons/fi";*/

const Filters = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data); 
  };

  return (
    <section className={css.container}>
      <form className={css.filtersForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.locationLabel} htmlFor="location">
          Location
          <input
            id="location"
            className={css.locationInput}
            type="text"
            {...register('location')}
            placeholder="City"
          />
          
        </label>

        <p className={css.filtersText}>Filters</p>

        <fieldset className={css.equipmentFieldset}>
          <legend className={css.equipmentLegend}>Vehicle equipment</legend>
          <div className={css.checkboxWrapper}>
            <input
              type="checkbox"
              {...register('details.airConditioner')}
              className={css.checkbox}
              id="ac"
            />
            <label className={css.checkboxLabel} htmlFor="ac">
              <div className={css.wrapper}>
                <svg className={css.checkboxIcon}>
                  <use xlinkHref={`${sprite}#icon-ac`}></use>
                </svg>
                <span className={css.checkboxSpan}>AC</span>
              </div>
            </label>

            <input
              type="checkbox"
              {...register('transmission')}
              className={css.checkbox}
              value="automatic"
              id="automatic"
            />
            <label className={css.checkboxLabel} htmlFor="automatic">
              <div className={css.wrapper}>
                <svg className={css.checkboxIcon}>
                  <use xlinkHref={`${sprite}#icon-automatic`}></use>
                </svg>
                <span className={css.checkboxSpan}>Automatic</span>
              </div>
            </label>

            <input
              type="checkbox"
              {...register('details.kitchen')}
              className={css.checkbox}
              id="kitchen"
            />
            <label className={css.checkboxLabel} htmlFor="kitchen">
              <div className={css.wrapper}>
                <svg className={css.checkboxIcon}>
                  <use xlinkHref={`${sprite}#icon-kitchen`}></use>
                </svg>
                <span className={css.checkboxSpan}>Kitchen</span>
              </div>
            </label>

            <input
              type="checkbox"
              {...register('details.TV')}
              className={css.checkbox}
              id="tv"
            />
            <label className={css.checkboxLabel} htmlFor="tv">
              <div className={css.wrapper}>
                <svg className={css.checkboxIcon}>
                  <use xlinkHref={`${sprite}#icon-tv`}></use>
                </svg>
                <span className={css.checkboxSpan}>TV</span>
              </div>
            </label>

            <input
              type="checkbox"
              {...register('details.shower')}
              className={css.checkbox}
              id="shower"
            />
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
            <input
              type="radio"
              value="panelTruck"
              {...register('type')}
              className={css.radio}
              id="van"
              name="type"
            />
            <label className={css.radioLabel} htmlFor="van">
              <div className={css.wrapper}>
                <svg className={css.radioIcon}>
                  <use xlinkHref={`${sprite}#icon-camper-v`}></use>
                </svg>
                <span className={css.radioSpan}>Van</span>
              </div>
            </label>

            <input
              type="radio"
              value="fullyIntegrated"
              {...register('type')}
              className={css.radio}
              id="integrated"
              name="type"
            />
            <label className={css.radioLabel} htmlFor="integrated">
              <div className={css.wrapper}>
                <svg className={css.radioIcon}>
                  <use xlinkHref={`${sprite}#icon-camper-i`}></use>
                </svg>
                <span className={css.radioSpan}>Fully Integrated</span>
              </div>
            </label>

            <input
              type="radio"
              value="alcove"
              {...register('type')}
              className={css.radio}
              id="alcove"
              name="type"
            />
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

        <button type="submit" className={css.button}>Search</button>
      </form>
    </section>
  );
};

export default Filters;
