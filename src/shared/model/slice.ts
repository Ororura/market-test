import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateType = {
  search: string;
};

const initialState: InitialStateType = {
  search: '',
};

export const sharedSlice = createSlice({
  name: 'shared',
  initialState: initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = sharedSlice.actions;
