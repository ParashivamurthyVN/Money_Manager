
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import IncomeForm from './IncomeForm';
import ExpenseForm from './ExpenseForm';


function AddMain() {

  const [page, setPage]= useState('Expense');

    return (
  <div className="AddMain">
  <div className='radio-inputs'>
		<label className="radio">
			<input  type="radio" name="radio" onClick={()=>{setPage('Income');}}/>
			<span className="name">Income</span>
		</label>
        <label className="radio">
			<input  type="radio" name="radio" onClick={()=>{setPage('Expense');}}/>
			<span className="name">Expenses</span>
		</label>
    </div>
        {page=='Income' && <IncomeForm />}
        {page=='Expense' && <ExpenseForm />} 
  </div>
    );
  }
  
  export default AddMain;