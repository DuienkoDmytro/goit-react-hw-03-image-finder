import { Component } from 'react';
import css from './service/styles.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.handlerClose);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.handlerClose);
  }

  render() {
    const { id, images, handlerClose, tags } = this.props;
    return (
      <div className={css.Overlay} onClick={handlerClose}>
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
