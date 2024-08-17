import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/selectors.js';
import AdvertItem from '../../components/AdvertItem/AdvertItem.jsx';
import css from './FavouriteCampers.module.css';


const FavouriteCampers = () => {
  const favourite = useSelector(selectFavorite);
  const navigate = useNavigate();

  return favourite.length > 0 ? (
    <section className={css.container}>
       <ul className={css.list}>
        {favourite.map(item => {
          return (
            <li key={item._id} className={css.item}>
              <AdvertItem item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  ) : (
    <section className={css.empty}>
      <h2 className={css.title}>Your Favorites List is Empty</h2>
      <button
        className={css.btn}
        onClick={() => {
          navigate('/catalog');
        }}
      >
        Explore Our Campers
      </button>
    </section>
  );
};

export default FavouriteCampers;
