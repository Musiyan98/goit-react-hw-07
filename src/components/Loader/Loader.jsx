import css from './Loader.module.css';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={css.Loader}>
      <FallingLines
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;
