import React from "react";

function DropDown(props){

  function Options(item, i){
    return(
      <option key={i} value={item}>{item}</option>
    );
  }

    return (
        <select className="input" name={props.name} onChange={props.onChange}>
        <option value="">Select...</option>
        {props.options.map(Options)}
      </select>
    );
}

export default DropDown;