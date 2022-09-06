import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingWalletConnectedData,
  walletFnFetcher,
  getTransactionFn,
} from "../RTK/slices/WalletSlice";
import Loader from "./Loader";
// this is cos we installed metamask so we can eth in ours window
const { ethereum } = window;

const WalletChecker = () => {
  const dispatch = useDispatch();
  //   form data fetched
  const formData = useSelector((state) => state.WalletSlice.formData);
  const [loading, setLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  // checking wallet is connected or not
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("install metamask");
      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts, " my account  P :WalletCheck , L: 17");
      dispatch(checkingWalletConnectedData(accounts));
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        //   getAll transactions()
      } else {
        console.log("none accounts founds ");
      }
    } catch (error) {
      console.log(error, "caught P:walletChecker , L:26");
    }
  };
  // connecting the wallet function
  const connectWallet = async () => {
    alert("Starting to connect to wallet");
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };
  //   transaction Function
  const sendTransaction = async () => {
    try {
      if (!ethereum)
        return alert("please install metamask before transactions");
      const { addressTo, amount, keyword, message } = formData;

      const transactionsContract = getEthereumContract();
      //   converting amount to gwei amount
      const parsedAmount = ethers.utils.parseEther(amount);
      //   sending some eth
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            // we have to write gas money in hexa decimal
            // the hexadec nmbr convert to gwei behind scenes 21000 = 0x528 gwei
            gas: "0x5208",
            // we have to convert amount to small amount for testing we cant send direct amount
            value: parsedAmount._hex,
          },
        ],
      });
      //   so the above fn is for sending the eth or for transactions
      // we also need to store the transactions right ? so let do it G unit
      //   transactionContract is the smartContract when there is addToBlockChain Fn written
      //   addToBlockChain fn needs address amount etc you can check it in contract
      const transactionHash = await transactionsContract.addToBlockChain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setLoading(true);
      console.log(transactionHash, "hey my hash is here");
      console.log(`loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      setLoading(false);
      console.log(`success - ${transactionHash.hash}`);
      // smart contract getTransactionCount
      const transactionCount = await transactionsContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      console.log(error);
      throw new Error("P:WalletChecker , L:53 transactionError");
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
    // connecting Wallet Fn sent
    dispatch(walletFnFetcher(connectWallet));
    // transactions function been sent
    dispatch(getTransactionFn(sendTransaction));
  }, []);
  return <div></div>;
};

export default WalletChecker;

// Helping FNs

const getEthereumContract = () => {
  // these are linked to contract not the john wick contract ofcourse
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  //   in this transactionsContract i gets all the contract function which we wrote behind
  const transactionsContract = new ethers.Contract(
    // these are the ingredients to fetch our contract the address abi and signer
    contractAddress,
    contractABI,
    signer
  );
  return transactionsContract;
};
