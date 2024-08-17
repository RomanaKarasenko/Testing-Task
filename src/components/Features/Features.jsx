import css from "./Features.module.css";
import Categories from "../Categories/Categories";

const Features = ({ item }) => {
  return (
    <div className={css.container}>
      <ul className={css.ul}>
        <li>
          <Categories
            icon="icon-user"
            title={`${item.adults} adults`}
            fill={true}
          />
        </li>
        <li>
          <Categories icon="icon-automatic" title={item.transmission} />
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
          <Categories
            icon="icon-bed"
            title={`${item.details.beds} beds`}
            className=".stroke"
          />
        </li>
        {item.details.airConditioner > 0 && (
          <li>
            <Categories icon="icon-acc" title="AC" />
          </li>
        )}
        {item.details.CD > 0 && (
          <li>
            <Categories icon="icon-cd" title="CD" />
          </li>
        )}

        {item.details.radio > 0 && (
          <li>
            <Categories icon="icon-radio" title="Radio" />
          </li>
        )}

        {item.details.hob > 0 && (
          <li>
            <Categories icon="icon-plate" title={`${item.details.hob} hob`} />
          </li>
        )}
        {item.details.shower > 0 && (
          <li>
            <Categories icon="icon-shower" title="Shower" />
          </li>
        )}
        {item.details.toilet > 0 && (
          <li>
            <Categories icon="icon-WC" title="Toilet" fill={true} />
          </li>
        )}
        {item.details.freezer > 0 && (
          <li>
            <Categories icon="icon-freezer" title="Freezer" />
          </li>
        )}

        {item.details.gas !== "" && (
          <li>
            <Categories
              icon="icon-gas"
              title={`${parseFloat(item.details.gas)} kg`}
              fill={true}
            />
          </li>
        )}
        {item.details.water !== "" && (
          <li>
            <Categories
              icon="icon-water"
              title={`${parseFloat(item.details.water)} l`}
            />
          </li>
        )}
        {item.details.microwave > 0 && (
          <li>
            <Categories icon="icon-microwave" title="Microwave" />
          </li>
        )}
        {item.details.TV > 0 && (
          <li>
            <Categories icon="icon-tv" title="TV" />
          </li>
        )}
      </ul>
      <h2 className={css.detailsTitle}>Vehicle details</h2>
      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <span className={css.detailsSpan}>Form</span>
          <span className={css.detailsSpan}>{item.form}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailsSpan}>Length</span>
          <span className={css.detailsSpan}>{`${parseFloat(
            item.length
          )} m`}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailsSpan}>Width</span>
          <span className={css.detailsSpan}>{`${parseFloat(
            item.width
          )} m`}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailsSpan}>Height</span>
          <span className={css.detailsSpan}>{`${parseFloat(
            item.height
          )} m`}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailsSpan}>Tank</span>
          <span className={css.detailsSpan}>{`${parseFloat(
            item.tank
          )} l`}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.detailsSpan}>Consumption</span>
          <span className={css.detailsSpan}>{item.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default Features;
