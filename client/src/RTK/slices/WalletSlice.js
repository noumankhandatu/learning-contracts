import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  connectFn: [],
  // account details
  checkingWalletConnection: {
    accountId: null,
    accountConnect: "",
  },
  TransactionFun: [],
  formData: [],
  allTransactions: [],
};

export const WalletSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    checkingWalletConnectedData: (state, { payload }) => {
      state.checkingWalletConnection.accountId = payload;
    },
    getFormDataAction: (state, { payload }) => {
      state.formData = payload;
    },
    getTransactionFn: (state, { payload }) => {
      state.TransactionFun = payload;
    },
    getAllTransactionsAction: (state, { payload }) => {
      state.allTransactions = payload;
    },
  },
});

export const {
  checkingWalletConnectedData,
  getFormDataAction,
  getTransactionFn,
  getAllTransactionsAction,
} = WalletSlice.actions;

export default WalletSlice.reducer;
