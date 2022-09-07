import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const { ethereum } = window;
export const sendTransactionAction = createAsyncThunk(
  "akaSendTransaction",
  async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts;
    } catch (error) {
      console.log(error);
      throw new Error("Send transaction Slice Error");
    }
  }
);

const initialState = {
  transactionData: "",
};

export const SendTransactionReducer = createSlice({
  name: "sendTransaction",
  initialState,
  reducers: {},
  extraReducers: {
    [sendTransactionAction.pending]: () => {
      console.log("pending");
    },
    [sendTransactionAction.fulfilled]: (state, { payload }) => {
      console.log("fulfilled ");
      return { ...state, connectFn: payload };
    },
    [sendTransactionAction.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const {} = SendTransactionReducer.actions;

export default SendTransactionReducer.reducer;
