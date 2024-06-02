import css from './ImageCard.module.css';
import { Image } from '../../unsplash-api';
import { ModalImg } from '../ImageModal/ImageModal';

type ImgProps = {
  img: string;
  alt: string | undefined;
  onClick: () => void;
};
const ImageCard: React.FC<ImgProps> = ({ img, alt, onClick }) => {
  return (
    <div>
      <img className={css.galleryItem} src={img} alt={alt} onClick={onClick} />
    </div>
  );
};
export default ImageCard;
