import { configureStore } from "@reduxjs/toolkit";
import WalletSlice from "./slices/WalletSlice";
export const store = configureStore({
  reducer: {
    WalletSlice: WalletSlice,
  },
});
