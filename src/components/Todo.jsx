import React from 'react'

const Todo = ({text, amount,deleteTodo,id}) => {
  return (
    <div className='flex justify-between  mb-3 p-1 px-5 bg-stone-300 border border-b-stone-400 border-l-stone-400 text-stone-600'> {text} <span>{amount}</span>
     <button onClick={()=>deleteTodo(id)}
     className='flex justify-center border border-stone-400 p-[1px] rounded bg-stone-200 w-[40px]'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
       className="w-6 h-6 text-stone-800 hover:text-orange-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button></div>
  )
}

export default Todo