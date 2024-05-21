
import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import IncomeForm from './IncomeForm';
import ExpenseForm from './ExpenseForm';


function AddMain() {

  const [page, setPage]= useState('Expense');

    return (
      <div className="AddMain">
       <h2>AddMain</h2>
       <form>
		<label>
			<input type="radio" name="radio" onClick={()=>{setPage('Income');}}/>
			<span>Income</span>
		</label>
        <label>
			<input type="radio" name="radio" onClick={()=>{setPage('Expense');}}/>
			<span>Expenses</span>
		</label>
        </form>
        {page=='Income' && <IncomeForm/>}
        {page=='Expense' && <ExpenseForm/>}
      </div>
    );
  }
  
  export default AddMain;