import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactArrey = [];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactArrey,
	reducers: {
		addContacts: {
			
		}
	},
});