import React, {useState} from 'react';
import DropDown from './Dropdown';

function IncomeForm() {

const [Income, setIncome] = useState({
    Item1:"",
    Item2:"",
    Item3:"",
    Item4:"",
    Ammount:""
});


function handleSubmit(event){
   event.preventDefault();
    console.log(Income);
}

function handleIncomeChange(event){
    const { name, value } = event.target;
  
    setIncome((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });




}

 return (
<div>
    <h3>Add Your income</h3>
    <form onSubmit={handleSubmit}>
        <DropDown name="Item1" onChange={handleIncomeChange}/>
        <DropDown name="Item2" onChange={handleIncomeChange}/>
        <DropDown name="Item3" onChange={handleIncomeChange}/>
        <DropDown name="Item4" onChange={handleIncomeChange}/>
        <input  type="text"  name="Ammount"
          onChange={handleIncomeChange} 
          placeholder="Income" ></input>
      <button type="submit">Add</button>
      </form>
</div>
 );

}

export default IncomeForm;