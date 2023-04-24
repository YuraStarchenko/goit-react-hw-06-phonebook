import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsArr = [];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [...contactsArr] },
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.contacts.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    remove(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContacts, remove } = contactSlice.actions;
