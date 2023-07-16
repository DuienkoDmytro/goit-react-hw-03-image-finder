import css from './service/styles.module.css';

export const LoadMoreButton = ({ LoadMoreButton }) => {
  return (
    <button className={css.Button} type="button" onClick={LoadMoreButton}>
      Load more
    </button>
  );
};
