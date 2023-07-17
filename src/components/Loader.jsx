import { RotatingLines } from 'react-loader-spinner';
import css from './service/styles.module.css';

export const Loader = () => {
  return (
    <div className={css.wrapper}>
      <RotatingLines
        strokeColor="#303f9f"
        strokeWidth="7"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};
