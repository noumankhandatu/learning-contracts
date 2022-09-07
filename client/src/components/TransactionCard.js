import React from "react";

const TransactionCard = (items) => {
  console.log(items, "my items");
  const { keyword, message, receiver, sender, timestamp } = items;
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-orange-200">
        <img
          src="https://www.cnet.com/a/img/resize/5a9287797e44d98efa098c9c22ad9857a7cfb9e4/2021/11/29/f566750f-79b6-4be9-9c32-8402f58ba0ef/richerd.png?auto=webp&width=1200"
          alt=""
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Keyword : {keyword}</div>
          <p class="text-gray-700 text-base">message : {message}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Func Receiver Id: {receiver}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Fund sender Id : {sender}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            timestamp :{timestamp.__hex}
          </span>
          <button className="bg-red-300 p-3">
            <a
              href={`https://goerli.etherscan.io/address/${sender}`}
              target="_blank"
              rel="noreferrer"
            >
              Click for more details fo this block
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
