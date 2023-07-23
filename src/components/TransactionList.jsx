import React from "react";
import Todo from "./Todo";
const TransactionList = ({ todos,deleteTodo }) => {

  return (
    <div>
      <h3 className=" text-stone-500  border-b border-stone-400 space-y-[20px] text-xl">History</h3>
      <ul className="flex flex-col p-3">
      {todos.map((el) => (
        <Todo deleteTodo={deleteTodo} key={el.id} id={el.id}amount={el.amount} text={el.text} />
        ))}
      </ul>
     
    </div>
  );
};

export default TransactionList;
