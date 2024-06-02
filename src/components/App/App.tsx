import { useEffect, useState } from 'react';
import { searchImages } from '../../unsplash-api';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { ModalImg } from '../ImageModal/ImageModal';

interface Images {
  alt: string;
  id: string;
  img: { small: string; regular: string };
}

export default function App() {
  const [images, setImages] = useState<Images[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchImg, setSearchImg] = useState<string>('');
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState<boolean>(false);
  const [modal, setModal] = useState<ModalImg>({ alt: '', img: '' });

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleSearch = (value: string): void => {
    setImages([]);
    setPage(1);
    setSearchImg(value);
  };
  useEffect(() => {
    if (searchImg === '') {
      return;
    }
    async function getImages(): Promise<void> {
      try {
        setLoading(true);
        setShowLoadMoreBtn(false);
        const data = await searchImages(searchImg, page);
        const totalPages = data.total_pages;
        setShowLoadMoreBtn(totalPages > page);
        setImages(prev => {
          return [...prev, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getImages();
  }, [searchImg, page]);
  const counterPage = (): void => {
    setPage(page + 1);
  };

  const openModal = (): void => {
    setModalIsOpen(true);
  };
  const closeModal = (): void => {
    setModalIsOpen(false);
  };
  return (
    <>
      <ImageModal
        state={modalIsOpen}
        img={modal}
        openModal={openModal}
        closeModal={closeModal}
      />
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          openModal={openModal}
          changeImage={setModal}
        />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {showLoadMoreBtn && <LoadMoreBtn onClick={counterPage} />}
    </>
  );
}
