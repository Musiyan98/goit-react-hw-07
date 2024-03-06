import { useSelector } from 'react-redux';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import Notification from './Notification/Notification';
import { selectIsFilter, selectIsContact } from '../redux/selectors.js';
import './App.css';

function App() {
  const isContact = useSelector(selectIsContact);
  const isFilter = useSelector(selectIsFilter);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />

        {isContact ? (
          isFilter ? (
            <ContactList />
          ) : (
            <Notification type={'isFilter'} />
          )
        ) : (
          <Notification type={'isContact'} />
        )}
      </div>
    </>
  );
}

export default App;
