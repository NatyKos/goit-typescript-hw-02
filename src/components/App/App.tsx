import { useEffect, useState } from 'react';
import { searchImages } from '../../unsplash-api';
import SearchBar from '../SearchBar/SearchBar';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchImg, setSearchImg] = useState('');
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [modal, setModal] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSearch = async value => {
    setImages([]);
    setPage(1);
    setSearchImg(value);
  };
  useEffect(() => {
    if (!searchImg) {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);
        setShowLoadMoreBtn(false);
        const data = await searchImages(searchImg, page);
        const totalPages = data.total_pages;
        setShowLoadMoreBtn(totalPages && totalPages !== page);
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
  const counterPage = () => {
    setPage(page + 1);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
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
