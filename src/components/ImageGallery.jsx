import { ImageGalleryItem } from './ImageGalleryItem';
import css from './service/styles.module.css';

export const ImageGallery = ({ images, handleOpen }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            urlImg={img.webformatURL}
            id={img.id}
            handleOpen={handleOpen}
          />
        );
      })}
    </ul>
  );
};
