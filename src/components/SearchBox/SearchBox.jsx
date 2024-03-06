import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.name);

  const SearchBarId = nanoid();
  const setFilters = evt => {
    dispatch(changeFilter(evt.target.value));
  };
  return (
    <div className={css.SearchBarBlok}>
      <label className={css.label} htmlFor={SearchBarId}>
        Find Contact by name
      </label>
      <input
        className={css.input}
        value={filters}
        onChange={setFilters}
        name="SearchBar"
        id={SearchBarId}
      ></input>
    </div>
  );
};

export default SearchBox;
