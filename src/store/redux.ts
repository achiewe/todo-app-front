import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice, { modeProps } from "./ModeSlice";

const store = configureStore({
  reducer: {
    Mode: ThemeSlice,
  },
});

export type Mode = {
  Mode: modeProps;
};

export default store;
