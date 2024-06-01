import css from './ImageCard.module.css';
import { Image } from '../../unsplash-api';

type ImgProps = {
  img: string;
  alt: string | undefined;
  onClick: (imgData: Image[]) => void;
};
export default function ImageCard({ img, alt, onClick }): React.FC<ImgProps> {
  return (
    <div>
      <img className={css.galleryItem} src={img} alt={alt} onClick={onClick} />
    </div>
  );
}
