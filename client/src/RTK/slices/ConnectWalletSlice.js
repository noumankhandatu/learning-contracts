import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const { ethereum } = window;
export const connectWalletAction = createAsyncThunk(
  "akaConnectWallet",
  async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  connectFn: "",
};

export const ConnectionOfWalletReducer = createSlice({
  name: "connectWallet",
  initialState,
  reducers: {},
  extraReducers: {
    [connectWalletAction.pending]: () => {
      console.log("pending");
    },
    [connectWalletAction.fulfilled]: (state, { payload }) => {
      console.log("fulfilled ");
      return { ...state, connectFn: payload };
    },
    [connectWalletAction.rejected]: () => {
      console.log("rejected");
    },
  },
});

export const {} = ConnectionOfWalletReducer.actions;

export default ConnectionOfWalletReducer.reducer;
