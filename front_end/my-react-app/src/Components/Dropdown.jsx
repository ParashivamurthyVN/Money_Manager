import React from "react";

function DropDown(props){
    return (
        <select name={props.name} onChange={props.onChange}>
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    );
}

export default DropDown;