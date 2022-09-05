// SPDX-License-Identifier: UNLICENSED

// () => writting the  version in which i want to code on in solidity
pragma solidity ^0.8.0;

contract Transactions {
    // first variable
   uint256 transactionCount;

    // function will call later on
    event Transfer(address sender , address receiver , uint amount , string message , uint256 timestamp , string keyword);
// creating objects like in typescript i.e these objects will come while transaction
    struct TransferStruct {
        address sender;
         address receiver;
         uint amount;
         string message;
         uint256 timestamp;
         string keyword;
    }
    // creating an array of transactions the  TransferStruct[] is the type for transaction as in TS
   TransferStruct[] transactions;
    // we will create some functions now but we have to make them visible by giving by add public
    // these parameters are so easy like we study in english but the memory is used for getting things from its memory like memory message if there's a message
    function addToBlockChain(address payable reciever  , uint amount , string memory message , string memory keyword) public{

        transactionCount += 1;
        // we will call transaction array and push the incrementing transactions
        // TransferStruct (  params are those params which are already declared at line 12)
        transactions.push(TransferStruct(msg.sender , reciever , amount , message , block.timestamp , keyword ));
        
        // we are just pushing the transactions we didnt start the transactions so for starting the transaction  we have to start with emit the about Fn line 10
        // the params must be same line 29 &&  33  cos its more like Typescript 
        emit Transfer(msg.sender , reciever , amount , message , block.timestamp , keyword );
    }
    // if we want to return have to this syntax
      function getAllTransactions() public view returns(TransferStruct[] memory){
        return transactions;
        
    }
      function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
   
}
