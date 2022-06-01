import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  handleOpenModal = e => {
    if (e.target !== e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { images, onItemClick } = this.props;

    return (
      <ul className={s.ImageGallery} onClick={this.handleOpenModal}>
        {images.map(({ id, webformatURL }) => {
          return (
            <ImageGalleryItem
              imageURL={webformatURL}
              key={id}
              imageID={id}
              onItemClick={onItemClick}
            />
          );
        })}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;
