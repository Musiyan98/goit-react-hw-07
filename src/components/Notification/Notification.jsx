import css from './Notification.module.css';

const Notification = ({ type }) => {
  if (type === 'isFilter') {
    return <p className={css.notification}>Contact not find</p>;
  } else if (type === 'isContact') {
    return <p className={css.notification}>No Contact yet</p>;
  }
};

export default Notification;
