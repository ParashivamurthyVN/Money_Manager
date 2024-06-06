import React from 'react';
import {Chart as ChartJS} from "chart.js/auto";
import {Bar, Pie} from "react-chartjs-2"
import ReactDOM from 'react-dom/client';

function GraphMain(props) {

  let totalIncome=total(props.Income);
  let totalExpense=total(props.Expense);
   let Category=[totalCategory(props.Expense, "Home"), totalCategory(props.Expense, "Own"), totalCategory(props.Expense, "Trip"), totalCategory(props.Expense, "Fitness"), totalCategory(props.Expense, "Shopping")];
  let CategoryOwn=totalCategory(props.Expense, "Own");
  
  function totalCategory(datas, c){
    let sum=0;
    datas.forEach(data => {
      if(c==data.content.Category){
      sum += parseInt(data.content.Ammount, 10);
    }
  });
  console.log("sum= "+sum);
    return sum;
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
      <div className="GraphMain">
       <h3 className='DisplayHeader2'>Income & Expense</h3>
        <Bar data={{
             labels: ["Income", "Expense"],
            datasets:[{ label:"Rupees",
              data:[totalIncome, totalExpense]}
            ]
          }}>      
        </Bar>
        <h3 className='DisplayHeader2'>Expense Category wise</h3>
        <Pie data={{
             labels: ["Home", "Own", "Trip", "Fitness", "Shopping"],
            datasets:[{
              label:"Rupees",
              data:Category
            }]
          }}>
        </Pie>
       
      </div>
    );
  }
  
  export default GraphMain;