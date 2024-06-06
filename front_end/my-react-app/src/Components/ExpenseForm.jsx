import React, {useState} from 'react';
import DropDown from './Dropdown';

function ExpenseForm() {

  const addExpenses= async (url, newItem)=>{
    const newData = await fetch(url, {
      method:"POST",
      headers:{
        'content-type':'application/json',
        'Accept':'application/json'
      },
      body:JSON.stringify({
        content:newItem
      })
    }).then(res=>res.json());
    //page refresh
  }

const ExpenseCategory =["Own", "Home", "Fitness", "Trip", "Shopping"];
const Accounts=["HDFC", "PNB", "Cash", "Other"];
const [Expense, setExpense] = useState({
  Account:"",
  Category:"",
  Note:"",
  Ammount:""
});

async function handleSubmit(event){
    // event.preventDefault();
    console.log(Expense);
    await addExpenses('/expenses', Expense);
}

function handleExpenseChange(event){
    const { name, value } = event.target;
  
    setExpense((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });

}

 return (
<div className="formDiv">
<form className="form" onSubmit={handleSubmit}>
    <p className='title' >Expenses</p>
    <p className='message'>Add your expenses</p> 
    <label>
      <span >Account</span>
      <DropDown  name="Account" onChange={handleExpenseChange} options={Accounts}/>
    </label>
    <label>
      <span >Category</span>
    - <DropDown  name="Category" onChange={handleExpenseChange} options={ExpenseCategory}/>     
    </label>
    <label>
      <span >Ammount</span>
        <input className="input" type="number"  name="Ammount" onChange={handleExpenseChange} placeholder="" />
    </label>    
    <label>
     <span>Note</span>
        <input className="input" name="Note" onChange={handleExpenseChange} placeholder=""/>
    </label>
    <button className='submit' type="submit">Add</button>
</form>
</div>
 );

}

export default ExpenseForm;

{/* 
    <form className='form' onSubmit={handleSubmit}>
    <p className='title'>Expenses</p>
    <p className='message'>Add your expenses</p>
    <DropDown name="Account" onChange={handleExpenseChange} options={Accounts}/>
        <DropDown name="Category" onChange={handleExpenseChange} options={ExpenseCategory}/>
        <input  type="text"  name="Ammount" onChange={handleExpenseChange} placeholder="Expense" ></input>
        <input  type="text"  name="Note" onChange={handleExpenseChange} placeholder="Note" ></input>
      <button type="submit">Add</button>
      </form> */}
