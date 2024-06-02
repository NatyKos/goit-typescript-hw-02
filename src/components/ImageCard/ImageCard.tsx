import css from './ImageCard.module.css';

type ImgProps = {
  img: string;
  alt: string;
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
