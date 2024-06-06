import React, {useState} from 'react';
import DropDown from './Dropdown';

function IncomeForm() {

const [Income, setIncome] = useState({
    Account:"",
    Category:"",
    Note:"",
    Ammount:""
});

const IncomeCategory =["Salary", "Allowance", "other"];
const Accounts=["HDFC", "PNB", "Cash", "Other"];

const addincome= async (url, newItem)=>{
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

//onclick not a function error
async function  handleSubmit(event){
  //  event.preventDefault();
    console.log(Income);
    await addincome('/incomes', Income);
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
<div className="formDiv">
<form className="form" onSubmit={handleSubmit}>
    <p className='title' >Income</p>
    <p className='message'>Add your income</p> 
    <label>
      <span >Account</span>
      <DropDown  name="Account" onChange={handleIncomeChange} options={Accounts}/>
    </label>
    <label>
      <span >Category</span>
    - <DropDown  name="Category" onChange={handleIncomeChange} options={IncomeCategory}/>     
    </label>
    <label>
      <span >Ammount</span>
        <input className="input" type="number"  name="Ammount" onChange={handleIncomeChange} placeholder="" />
    </label>    
    <label>
     <span>Note</span>
        <input className="input" name="Note" onChange={handleIncomeChange} placeholder=""/>
    </label>
    <button className='submit' type="submit">Add</button>
</form>
</div>
 );

}

export default IncomeForm;



  //  <h3>Add Your income</h3>
  //   <form onSubmit={handleSubmit}>
  //       <DropDown name="Account" onChange={handleIncomeChange} options={Accounts}/>
  //       <DropDown name="Category" onChange={handleIncomeChange} options={IncomeCategory}/>
  //       <input  type="text"  name="Ammount" onChange={handleIncomeChange} placeholder="Income" ></input>
  //       <input  type="text"  name="Note" onChange={handleIncomeChange} placeholder="Note" ></input>
  //     <button type="submit">Add</button>
  //     </form>