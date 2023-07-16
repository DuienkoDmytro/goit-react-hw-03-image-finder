import css from './service/styles.module.css';

export const ImageGalleryItem = ({ urlImg, id, handleOpen, tags }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={urlImg}
        alt={tags}
        onClick={() => handleOpen(id)}
      />
    </li>
  );
};
