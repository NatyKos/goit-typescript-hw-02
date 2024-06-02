import css from './Loader.module.css';
import { Watch } from 'react-loader-spinner';
const Loader: React.FC = () => {
  return (
    <div className={css.loader}>
      <Watch
        visible={true}
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default Loader;
