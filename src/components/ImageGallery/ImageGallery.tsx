import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { Image } from '../../unsplash-api';
import { ModalImg } from '../ImageModal/ImageModal';

interface imageGalleryProps {
  images: Image[];
  openModal: () => void;
  changeImage: (image: ModalImg) => void;
}

const imageGallery: React.FC<imageGalleryProps> = ({
  images,
  openModal,
  changeImage,
}) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, img, alt }) => (
        <li
          key={id}
          onClick={() => {
            changeImage({ img: img.regular, alt: alt });
          }}
        >
          <ImageCard img={img.small} alt={alt} onClick={openModal} />
        </li>
      ))}
    </ul>
  );
};
export default imageGallery;
