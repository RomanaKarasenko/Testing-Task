import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./Reviews.module.css";

const Reviews = ({ item }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {item.reviews.map((el) => {
          return (
            <li key={el.reviewer_name}>
              <ReviewItem item={el} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
