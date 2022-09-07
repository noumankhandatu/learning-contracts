import { configureStore } from "@reduxjs/toolkit";
import ConnectionOfWalletReducer from "./slices/ConnectWalletSlice";
import WalletSlice from "./slices/WalletSlice";
export const store = configureStore({
  reducer: {
    WalletSlice: WalletSlice,
    ConnectionOfWalletReducer: ConnectionOfWalletReducer,
  },
});
