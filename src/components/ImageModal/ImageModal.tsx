import Modal, { Styles } from 'react-modal';
import css from './ImageModal.module.css';
import { FC } from 'react';

Modal.setAppElement('#root');
const customStyles: Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export interface ModalImg {
  alt: string;
  img: string;
}
interface ImgModalProps {
  openModal: () => void;
  closeModal: () => void;
  state: boolean;
  img: ModalImg;
}
const ImageModal: FC<ImgModalProps> = ({ state, closeModal, img }) => {
  return (
    <div className={css.modalImg}>
      <Modal
        className={css.modal}
        overlayClassName={css.Overlay}
        isOpen={state}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button className={css.btnCloseModal} onClick={closeModal}>
          ✕
        </button>
        <img src={img.img} alt={img.alt} />
      </Modal>
    </div>
  );
};
export default ImageModal;
