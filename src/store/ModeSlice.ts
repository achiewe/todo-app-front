import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface modeProps {
  gloomy: boolean;
}

const initialState: modeProps = {
  gloomy: false,
};

const ThemeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    dark: (state, action: PayloadAction<boolean>) => {
      state.gloomy = action.payload;
    },
  },
});

export const { dark } = ThemeSlice.actions;
export default ThemeSlice.reducer;
