import css from './ImageCard.module.css';

export default function ImageCard({ img, alt, onClick }) {
  return (
    <div>
      <img className={css.galleryItem} src={img} alt={alt} onClick={onClick} />
    </div>
  );
}
