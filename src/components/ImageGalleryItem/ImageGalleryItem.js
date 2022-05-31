import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageURL }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img src={imageURL} className={s.ImageGalleryItem_image} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = { imageURL: PropTypes.string.isRequired };

export default ImageGalleryItem;
