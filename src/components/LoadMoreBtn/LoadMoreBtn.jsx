import css from "./LoadMoreBtn.module.css";
import clsx from "clsx";
const LoadMoreBtn = ({ handleMoreBtnClick }) => {
  return (
    <button
      type="button"
      className={clsx(css.loadMoreBtn)}
      onClick={handleMoreBtnClick}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
