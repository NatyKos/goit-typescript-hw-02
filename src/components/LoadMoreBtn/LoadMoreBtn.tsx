import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.btnContainer}>
      <button className={css.loadMoreBtn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
