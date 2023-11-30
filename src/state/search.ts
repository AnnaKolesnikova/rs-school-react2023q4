import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const SEARCH_WORD = 'SearchWord';

interface SearchWord {
  value: string;
}

const initialState: SearchWord = {
  value: localStorage.getItem(SEARCH_WORD) || '',
};

export const search = createSlice({
  name: 'searchWord',
  initialState,
  reducers: {
    updateSearchWord: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      localStorage.setItem(SEARCH_WORD, action.payload);
    },
  },
});

export const { updateSearchWord } = search.actions;

export default search.reducer;
