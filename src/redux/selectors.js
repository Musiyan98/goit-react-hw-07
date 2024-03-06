import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;
export const selectFiltersValue = state => state.filters.name;
export const selectIsLoading = state => state.contacts.loading;
export const selectIsError = state => state.contacts.error;

export const selectFiltersContacts = createSelector(
  [selectContacts, selectFiltersValue],
  (contacts, filterValue) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);

export const selectIsContact = state => selectContacts(state).length !== 0;
export const selectIsFilter = state => selectFiltersContacts(state).length !== 0;
