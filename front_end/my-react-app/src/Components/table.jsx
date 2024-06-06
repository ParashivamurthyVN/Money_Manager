import React, {useState} from 'react';

function Table(props){
    let tData=props.data;

    function tablerow(data){
        return( 
        <tr className='tcard' key={data._id}>
         <td className='title-text'>{data.content.Account}</td>
         <td className='title-text'>{data.content.Category}</td>
         <td>{data.content.Ammount}</td>
         <td className='title-text'>{data.content.Note}</td>
       </tr>)
       }

    return(
        <div className='table'>  
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
          {tData.map(tablerow)}
          </tbody>
        </table>
       </div>

    )
}

export default Table;