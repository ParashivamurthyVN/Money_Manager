import React, {useState} from 'react';
import DropDown from './Dropdown';

function ExpenseForm() {

const [Expense, setExpense] = useState({
    Item1:"",
    Item2:"",
    Item3:"",
    Ammount:""
});


function handleSubmit(event){
   event.preventDefault();
    console.log(Expense);
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
<div>
    <h3>Add Your Expense</h3>
    <form onSubmit={handleSubmit}>
        <DropDown name="Item1" onChange={handleExpenseChange}/>
        <DropDown name="Item2" onChange={handleExpenseChange}/>
        <DropDown name="Item3" onChange={handleExpenseChange}/>
    
        <input  type="text"  name="Ammount"
          onChange={handleExpenseChange} 
          placeholder="Expense" >
          </input>
      <button type="submit">Add</button>
      </form>
</div>
 );

}

export default ExpenseForm;