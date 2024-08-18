import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/campers/slice.js";
import clsx from "clsx";
import sprite from "../../assets/icons/sprite.svg";
import css from "./HeartBtn.module.css";
import { selectIsFavorite } from "../../redux/selectors.js";

const HeartBtn = ({ item }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(selectIsFavorite(item));
  const handleLikeClick = () => {
    dispatch(toggleFavorite(item));
  };
  return (
    <button className={css.heartButton} onClick={handleLikeClick}>
      <svg className={clsx(css.likeIcon, { [css.liked]: isFavorite })}>
        <use xlinkHref={`${sprite}#icon-heart`}></use>
      </svg>
    </button>
  );
};
export default HeartBtn;
