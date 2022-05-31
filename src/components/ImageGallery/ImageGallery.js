import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.ImageGallery}>
      {console.log(images)}
      {images.map(({ id, webformatURL }) => {
        return <ImageGalleryItem imageURL={webformatURL} key={id} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = { images: PropTypes.array.isRequired };

export default ImageGallery;
