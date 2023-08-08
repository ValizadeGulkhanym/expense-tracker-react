import React from "react";

const IncomeExpence = ({ todos }) => {
  const income =
    todos.length > 0
      ? todos.reduce((total, el) => {
          if (+el.amount > 0) {
            return total + +el.amount;
          } else {
            return total;
          }
        }, 0)
      : 0;

      const expense =
      todos.length > 0
      ? todos.reduce((total, el) => {
          console.log(el);
          if (+el.amount < 0) {
            return total + +el.amount;
          } else {
            return total;
          }
        }, 0)
        : 0;

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
