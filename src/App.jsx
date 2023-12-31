import React, { useState } from "react";
import IncomeExpence from "./components/IncomeExpence";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => id !== todo.id);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

  return (
    <>
      <div className="font-serif flex flex-col bg-gradient-to-r from-stone-500 min-h-screen text-white">
        <h1 className="w-full text-4xl font-serif text-stone-300">
          Expense Tracker
        </h1>
        <div className="flex  justify-around ">
          <div className="flex flex-col gap-5  mt-[200px]">
            <Balance todos={todos}  />
            <IncomeExpence
              todos={todos}

            />
          </div>
          <div className="relative bottom-[30px] left-[150px] w-1/3">
            <AddTransaction
           
              todos={todos}
              setTodos={setTodos}
            />
            <TransactionList deleteTodo={deleteTodo} todos={todos} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
