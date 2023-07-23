import React, { useEffect } from "react";

const IncomeExpence = ({ todos, setExpense, setIncome, expense, income }) => {
  useEffect(() => {
    todos.map((item) => {
      if (parseInt(item.amount) > 0) {
        setIncome((prev) => prev + parseInt(item.amount));
      }
      if (parseInt(item.amount) < 0) {
        setExpense((prev) => prev + parseInt(item.amount));
      }
    });
  }, [todos]);

  console.log(income, expense);
  return (
    <div className='flex justify-around items-center w-96 h-28 bg-orange-300 rounded-3xl "'>
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-plus" className="money plus">
          -${expense}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpence;
