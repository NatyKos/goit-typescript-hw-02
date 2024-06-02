import css from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  return (
    <p className={css.errorMsg}>
      Oops, something went wrong! Please restart the page, it usually helps
    </p>
  );
};
export default ErrorMessage;
