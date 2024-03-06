import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import ContactForm from './ContactForm/ContactForm';
import Notification from './Notification/Notification';

import {
  selectIsFilter,
  selectIsContact,
  selectIsLoading,
  selectIsError,
} from '../redux/selectors.js';
import { fetchContact } from '../redux/operations';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const isContact = useSelector(selectIsContact);
  const isFilter = useSelector(selectIsFilter);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

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
