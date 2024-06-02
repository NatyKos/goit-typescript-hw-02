import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Image } from '../../unsplash-api';
import { ModalImg } from '../ImageModal/ImageModal';

interface ImageGalleryProps {
  images: Image[];
  openModal: () => void;
  changeImage: (image: ModalImg) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  openModal,
  changeImage,
}) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, urls, alt }) => (
        <li
          key={id}
          onClick={() => {
            changeImage({ img: urls.regular, alt: alt });
          }}
        >
          <ImageCard img={urls.small} alt={alt} onClick={openModal} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
