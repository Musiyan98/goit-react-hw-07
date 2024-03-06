import css from './Contact.module.css';
import { FiPhone, FiUser } from 'react-icons/fi';
import { deleteContact } from '../../redux/operations';
import { useDispatch } from 'react-redux';

const Contact = ({ contactItem: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.contactInfo}>
        <p>
          <FiUser className={css.icon} /> {name}
        </p>
        <p>
          <FiPhone className={css.icon} /> {number}
        </p>
      </div>
      <button
        className={css.buttons}
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
