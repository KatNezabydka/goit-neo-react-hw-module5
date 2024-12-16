import { ThreeDots } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';


const Loader = () => (
  <div className={css.center}>
    <ThreeDots height={80} width={80} color="blue" ariaLabel="loading" />
  </div>
);

export default Loader;