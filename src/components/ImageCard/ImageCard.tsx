import css from './ImageCard.module.css';
import { Image } from '../../unsplash-api';

type ImgProps = {
  img: string;
  alt: string | undefined;
  onClick: (imgData: Image[]) => void;
};
const ImageCard: React.FC<ImgProps> = ({ img, alt, onClick }) => {
  return (
    <div>
      <img className={css.galleryItem} src={img} alt={alt} onClick={onClick} />
    </div>
  );
};
export default ImageCard;
