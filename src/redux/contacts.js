
import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    setItems(state, {payload}) {
      state.items.push(payload);
    },
    deleteItems(state, {payload}) {
      state.items = state.items.filter(
        contact => contact.id !== payload);
    },
    setFilter(state, {payload}) {
      state.filter = payload;
    },
  },
});
export const { setItems, setFilter, deleteItems } =
contactsSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilterValue = state => state.contacts.filter;



export const useFilter= () => {
  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getContacts)
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
}
