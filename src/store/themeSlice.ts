import { createSlice } from '@reduxjs/toolkit';
import { getBrowserTheme } from '../utils/getBrowserTheme';
import type { RootState } from './store';

export const themes = ['light', 'dark'] as const;

export type Theme = (typeof themes)[number];

export interface StoreState {
  theme: Theme;
}

const initialState: StoreState = {
  theme: getBrowserTheme(),
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

export const selectTheme = (state: RootState) => state.theme.theme;

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
