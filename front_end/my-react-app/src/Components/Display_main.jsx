
import ReactDOM from 'react-dom/client';
import React, {useState} from 'react';
import DisplayDate from './date';
import Table from './table';
import GraphMain from './Graph_Main';

function DisplayMain() {
  const [expenses, setExpenses] = useState([]);
  const [Income, setIncome] = useState([]);
  const [tableData, setTableData]= useState('Expense');

  async function getExpenses(url){
    const newData = await fetch(url, {
      method:"GET",
      headers:{
        'content-type':'application/json',
        'Accept':'application/json'
      }
    }).then(res=>res.json());
    console.log(newData);
    setExpenses(newData);

  }

  async function getIncome(url){
    const newData = await fetch(url, {
      method:"GET",
      headers:{
        'content-type':'application/json',
        'Accept':'application/json'
      }
    }).then(res=>res.json());
    console.log(newData);
    setIncome(newData);  
  }


  if(expenses.length==0 && Income.length==0 ){
    getIncome('/incomes');
    getExpenses('/expenses');
    }


  function total(datas){
    let sum=0;
    datas.forEach(data => {
      sum += parseInt(data.content.Ammount, 10);
  });
  console.log("sum= "+sum);
    return sum;
  }


    return (
    <div className="DisplayMain">
     <GraphMain Income={Income} Expense={expenses}/>
     <div className='topSection'>
       <DisplayDate/>
      <div className='DisplayHeader2'>
      <h3>Total Income <span className='numberSpan'>{total(Income)}</span></h3>
       <h3>Total Expenses <span className='numberSpan'>{total(expenses)}</span></h3>
       <h3>Remaining  <span className='numberSpan'>{total(Income)-total(expenses)}</span></h3>
      </div>
       <div className='radio-inputs radioButtonForm'>
		<label className="radio">
			<input  type="radio" name="radio" onClick={()=>{setTableData('Income');}}/>
			<span className="name">Income</span>
		</label>
        <label className="radio">
			<input  type="radio" name="radio" onClick={()=>{setTableData('Expense');}}/>
			<span className="name">Expenses</span>
		</label>
    </div>
       {tableData=='Expense' &&  <Table data={expenses}/>}
       {tableData=='Income' && <Table data={Income}/>}
      </div>
    </div>
    );
  }
  
  export default DisplayMain;

       {/* <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Category</th>
              <th>Ammount</th>
              <th>Note</th>
            </tr>
          </thead>
          <tbody>
          {tableData=='Expense' && expenses.map(tablerow)}
          {tableData=='Income' && Income.map(tablerow)}
          </tbody>
        </table>
       </div> */}