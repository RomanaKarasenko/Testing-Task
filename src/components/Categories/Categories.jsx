import css from "./Categories.module.css";
import clsx from 'clsx';
import sprite from '../../assets/icons/sprite.svg';

const Categories = ({ title, icon, fill }) => {
  return (
    <div className={css.container}>
    <svg className={clsx(css.icon, fill && css.fill)}>
      <use xlinkHref={`${sprite}#${icon}`}></use>
    </svg>
    <p className={css.categoryText}>{title}</p>
  </div>
);
};

export default Categories;
