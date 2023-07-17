import { Component } from 'react';
import css from './service/styles.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.handleClose);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.handleClose);
  }

  render() {
    const { id, images, handleClose, tags } = this.props;
    return (
      <div className={css.Overlay} onClick={handleClose}>
        <div className={css.Modal}>
          <img
            src={images.filter(img => img.id === id)[0].largeImageURL}
            alt={tags}
          />
        </div>
      </div>
    );
  }
}
export { Modal };
