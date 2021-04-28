import React from "react";

const Input=({name,label,value,error,onChange})=>{
return(
    <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input type="text" 
    value={value} onChange={onChange} id={name} name={name} label={label} className="form-control"/>
   
   
  { error && <div className="alert alert-danger">{error} </div> }
    </div>

);
}
export default Input;