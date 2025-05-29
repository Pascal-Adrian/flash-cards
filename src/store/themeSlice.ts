import { createSlice } from '@reduxjs/toolkit';

export const themes = ['light', 'dark'] as const;

export type Theme = (typeof themes)[number];

export interface StoreState {
  theme: Theme;
}

const initialState: StoreState = {
  theme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const selectTheme = (state: StoreState) => state.theme;

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
