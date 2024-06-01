import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function imageGallery({ images, openModal, changeImage }) {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, urls, alt_description }) => (
        <li
          key={id}
          onClick={() => {
            changeImage({ img: urls.regular, alt: alt_description });
          }}
        >
          <ImageCard
            img={urls.small}
            alt={alt_description}
            onClick={openModal}
          />
        </li>
      ))}
    </ul>
  );
}
