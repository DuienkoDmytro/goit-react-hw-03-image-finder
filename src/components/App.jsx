import { Component } from 'react';
import { nanoid } from 'nanoid';
import { getAllImages } from './api/api';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import { Loader } from './Loader';
import { Searchbar } from './Searchbar';
import { LoadMoreButton } from './Button';
// import * as basicLightbox from 'basiclightbox';
import css from './service/styles.module.css';

class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    isModalOpen: false,
    searchRequiring: '',
    page: 1,
    totalPage: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      (this.state.searchRequiring &&
        prevState.searchRequiring !== this.state.searchRequiring) ||
      (this.state.page && prevState.page !== this.state.page)
    ) {
      this.setState({ isLoading: true });
      const fetch = () => {
        try {
          getAllImages(this.state.searchRequiring, this.state.page).then(
            ({ data }) => {
              const photos = data.hits.map(photo => ({
                id: nanoid(),
                webformatURL: photo.webformatURL,
                largeImageURL: photo.largeImageURL,
              }));
              this.setState({
                photos,
                totalPage: data.totalHits,
                isLoading: false,
                page: this.state.page,
              });
            }
          );
        } catch (error) {
          console.log(error);
        }
      };
      fetch();
    }
  }

  handleOpen = id => {
    this.setState({ isModalOpen: id });
  };
  handleClose = e => {
    if (e.target.nodeName === 'IMG' || e.code === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };
  handleSubmit = query => {
    this.setState({ searchRequiring: query.trim(), page: 1, photos: [] });
  };

  LoadMoreButton = () => {
    this.setState(prev => {
      return { page: prev.page + 1 };
    });
  };

  render() {
    return (
      <>
        <div className={css.App}>
          <Searchbar handleSubmit={this.handleSubmit} />
          <ImageGallery
            images={this.state.photos}
            handleOpen={this.handleOpen}
          />
          {this.state.photos.length !== 0 &&
            this.state.page * 12 <= this.state.totalPage && (
              <LoadMoreButton LoadMoreButton={this.LoadMoreButton} />
            )}
        </div>
        {this.state.isLoading && <Loader />}
        {this.state.isModalOpen !== false && (
          <Modal
            images={this.state.photos}
            id={this.state.isModalOpen}
            handleClose={this.handleClose}
          />
        )}
      </>
    );
  }
}
export { App };
