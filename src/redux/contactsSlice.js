import { createSlice, nanoid } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
  contacts: [],
  filter: '',
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      prepare: (contactName, number) => {
        return {
          payload: {
            id: nanoid(),
            contactName,
            number,
          },
        };
      },
      reducer: (state, action) => {
        const findByName = state.contacts.find(
          contact => contact.contactName === action.payload.contactName
        );
        if (!findByName) {
          state.contacts.push(action.payload);
        } else toast.info(`${findByName.contactName} is already in contacts`);
      },
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, updateFilter } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
