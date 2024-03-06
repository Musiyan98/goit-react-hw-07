import css from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <p className={css.ErrorMessage}>
      Looks like something went wrong. Try to restart the page or repeat your request
    </p>
  );
};
export default ErrorMessage;
