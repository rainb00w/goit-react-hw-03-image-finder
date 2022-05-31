import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  modalContent = id => {
    this.props.onItemClick(id);
  };

  render() {
    const { imageID, imageURL } = this.props;
    return (
      <li className={s.ImageGalleryItem}>
        <img
          src={imageURL}
          className={s.ImageGalleryItem_image}
          alt=""
          onClick={() => this.modalContent(imageID)}
        />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = { imageURL: PropTypes.string.isRequired };

export default ImageGalleryItem;
