import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connectFn: [],
  // account details
  checkingWalletConnection: {
    accountId: "",
    accountConnect: "",
  },
  formData: [],
  TransactionFun: [],
};

export const WalletSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    walletFnFetcher: (state, { payload }) => {
      state.connectFn = payload;
    },
    checkingWalletConnectedData: (state, { payload }) => {
      state.checkingWalletConnection.accountId = payload;
    },
    formDataFetching: (state, { payload }) => {
      state.formData = payload;
    },
    getTransactionFn: (state, { payload }) => {
      state.TransactionFun = payload;
    },
  },
});

export const {
  walletFnFetcher,
  formDataFetching,
  checkingWalletConnectedData,
  getTransactionFn,
} = WalletSlice.actions;

export default WalletSlice.reducer;
