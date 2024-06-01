import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export default function ImageModal({ state, closeModal, img }) {
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
}
