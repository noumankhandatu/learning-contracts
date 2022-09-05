const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
// const main = async () => {
//   const Transactions = await hre.ethers.getContractFactory("Transactions");
//   const transactions = await Transactions.deploy();
//   await transactions.deployed();
//   console.log("Transactions is deployed Nig to :", transactions.address);
// };

// const runMain = async () => {
//   try {
//     await main();
//     process.exit(0);
//   } catch (error) {
//     console.log(error);
//     process.error(1);
//   }
// };

// runMain();
// expect(await Transactions.greet()).to.equal("Hello, Nouman sup!");
// const setGreetingTx = await Transactions.setGreeting("Hola, mundo!");
// await setGreetingTx.wait();

// expect(await Transactions.greet()).to.equal("Hola, mundo!");
// const currentTimestampInSeconds = Math.round(Date.now() / 1000);
// const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
// const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

// const lockedAmount = hre.ethers.utils.parseEther("1");

// const Lock = await hre.ethers.getContractFactory("Lock");
// const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

// await lock.deployed();

// console.log(
//   `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
// );
