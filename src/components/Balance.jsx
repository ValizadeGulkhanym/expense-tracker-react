import React, { } from "react";

const Balance = ({ todos}) => {
  const balance = todos.reduce((total, el) => {
    return total + +el.amount;
  }, 0);

  return (
    <div className="flex flex-col justify-center items-center w-96 h-28 bg-orange-300  rounded-3xl ">
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>
    </div>
  );
};

export default Balance;
