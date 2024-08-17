import { GoStarFill } from "react-icons/go";
import css from "./ReviewItem.module.css";

const ReviewItem = ({ item }) => {
  return (
    <div className={css.reviewContainer}>
      <div className={css.header}>
        <span className={css.initial}>{item.reviewer_name[0]}</span>
        <div className={css.details}>
          <p className={css.reviewerName}>{item.reviewer_name}</p>
          <div className={css.stars}>
            {Array.from({ length: item.reviewer_rating }, (_, index) => (
              <GoStarFill key={index} className={css.filledStar} />
            ))}
            {Array.from({ length: 5 - item.reviewer_rating }, (_, index) => (
              <GoStarFill key={index} className={css.emptyStar} />
            ))}
          </div>
        </div>
      </div>
      <p className={css.comment}>{item.comment}</p>
    </div>
  );
};

export default ReviewItem;
