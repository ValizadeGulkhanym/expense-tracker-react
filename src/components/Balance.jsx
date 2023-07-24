import React, { useState,useEffect } from "react";

const Balance = ({ income, expense}) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const total = income + expense
    console.log(income, expense)
    setBalance(total)

  }, [income, expense]);
 
  return (
    <div className="flex flex-col justify-center items-center w-96 h-28 bg-orange-300  rounded-3xl ">
      <h4>Your Balance</h4>
      <h1 id="balance">${balance}</h1>
    </div>
  );
};

export default Balance;