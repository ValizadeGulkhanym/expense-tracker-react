import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";


const AddTransaction = ({todos, setTodos, setExpense, setIncome}) => {
  const [amount, setAmount] = useState("");
  const [text, setText] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(+amount > 0) {
      setIncome(prev => prev + +amount)
    }else {
      setExpense(prev => prev + +amount)
    }

    setTodos([...todos, { text, amount, id: uuidv4() }]);
    localStorage.setItem(
      "todos",
      JSON.stringify([...todos, { text, amount,  id: uuidv4() }])

    );
    setText("");
    setAmount('');
  };
  return (
    <div className="p-4 text-stone-500  space-y-[10px]">
      <h3 className="text-xl  border-b border-stone-400">Add new transaction</h3>
      <form className="flex flex-col gap-5"
       onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            className="w-full h-[36px] outline-stone-300 px-2 placeholder:text-stone-200 block bg-gradient-to-r from-stone-400"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (negative-expense, positive-income)
          </label>
          <input
            className="w-full h-[36px] outline-stone-300 px-2 placeholder:text-stone-200 block bg-gradient-to-r from-stone-400"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="w-full bg-orange-400 rounded-lg h-[36px] text-stone-200">
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
