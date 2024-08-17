import Filters from '../../components/Filters/Filters';
import AdvertList from '../../components/AdvertsList/AdvertsList';
import css from './CamperCatalog.module.css';

const CamperCatalog = () => {
    return (
      <div className={css.container}>
        <Filters />
        <AdvertList />
        
      </div>
    );
  };
  
  export default CamperCatalog;