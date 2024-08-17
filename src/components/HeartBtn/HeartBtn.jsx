
import clsx from 'clsx';
import sprite from '../../assets/icons/sprite.svg';
import css from './HeartBtn.module.css';

const HeartBtn = ({ isActive, onClick }) => {
  return (
    <button className={css.heartButton} onClick={onClick}>
      <svg className={clsx(css.heartIcon, { [css.favorite]: isActive })}>
        <use xlinkHref={`${sprite}#icon-heart`}></use>
      </svg>
    </button>
  );
};

export default HeartBtn;
