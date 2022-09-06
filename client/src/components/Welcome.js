import React, { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
import { formDataFetching } from "../RTK/slices/WalletSlice";
import { useSelector, useDispatch } from "react-redux";
const Welcome = () => {
  const dispatch = useDispatch();
  // connect function is fetched here
  const connectWallet = useSelector((state) => state.WalletSlice.connectFn);
  // account Id fetched Here
  const accountId = useSelector(
    (state) => state.WalletSlice.checkingWalletConnection.accountId
  );
  // sendTransaction fn fetched
  const sendTransaction = useSelector(
    (state) => state.WalletSlice.TransactionFun
  );
  // form data grabbed
  const fd = useSelector((state) => state.WalletSlice.formData);
  // input data
  const [formData, setFormData] = useState({
    addressTo: "",
    amount: "",
    keyword: "",
    message: "",
  });
  // form on change function
  const handleChange = (e, name) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: e.target.value,
    }));
  };
  // form send button
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;
    if (!addressTo || !amount || !keyword || !message) return;
    alert("info sended");
    dispatch(formDataFetching(formData));
    e.preventDefault();
    sendTransaction();
  };

  // just common styles
  const companyCommonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Hey RoboPunk App <br /> Im a Testing App
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Hey im better than sofia robot i can send money but she cant jokes
            apart lol
          </p>

          {!accountId && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#e7ab06] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}
          {/* Just UI */}
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Im way easy to use
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Im using Eth
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              You can all me web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Block Chain
            </div>
          </div>
        </div>
        {/* Just UI Ended */}
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card  ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-black text-xl font-bold text-large">
                  {/* {shortenAddress(currentAccount)} */}
                  {accountId
                    ? accountId
                    : `Connect MetaMask for Account Details `}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Current MetaMask ID
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
// used Components

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
// const [accountAddress, setAccountAddress] = useState("");
// console.log(window);
// if (
//   typeof window !== "undefined" &&
//   typeof window.ethereum !== "undefined"
// ) {
//   getAccount().then((response) => {
//     setAccountAddress(response);
//   });
// } else {
//   console.log("error");
// }

// async function getAccount() {
//   const accounts = await window.ethereum.request({
//     method: "eth_requestAccounts",
//   });
//   const account = accounts[0];

//   return account;
// }
