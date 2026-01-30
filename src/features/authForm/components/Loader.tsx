import { createPortal } from 'react-dom';
import style from '../style/loader.module.scss';

const Loader = () => {
  return createPortal(
    <div className={style.loadingOverlay}>
      <div className={style.loading}>...Loadin</div>
    </div>,
    document.body,
  );
};

export default Loader;
