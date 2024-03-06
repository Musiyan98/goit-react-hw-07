import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFiltersContacts } from '../../redux/selectors';

const ContactList = () => {
  const filterContact = useSelector(selectFiltersContacts);

  return (
    <ul className={css.list}>
      {filterContact.map(contactItem => (
        <li className={css.listItem} key={contactItem.id}>
          <Contact contactItem={contactItem} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
