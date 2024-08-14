import Filters from '../../components/Filters/Filters';
import css from './CamperCatalog.module.css';

const CamperCatalog = () => {
    return (
      <div className={css.container}>
        <Filters />
        
      </div>
    );
  };
  
  export default CamperCatalog;