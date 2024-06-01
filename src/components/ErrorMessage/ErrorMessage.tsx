import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <p className={css.errorMsg}>
      Oops, something went wrong! Please restart the page, it usually helps
    </p>
  );
}
