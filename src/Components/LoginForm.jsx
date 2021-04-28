import React, { Component } from 'react';
import  Input  from "./Inputs/Input";
import Joi from  'joi-browser';

class LoginForm extends Component {

state={
 
    account:{
      username:"",
      password:""
    },
    errors:{}
}

schema={
  username:Joi.string().required(),
  password:Joi.string().required()
}



validate=()=>{
const result=Joi.validate(this.state.account,this.schema,{abortEarly:false});
console.log(result);
  const errors={};
  const {account}=this.state;
  if(account.username.trim()===''){
errors.username="User is Required";
  }
  if(account.password.trim()===''){
    errors.password="password is Required";
 }
      
  return Object.keys(errors).length===0?null:errors;
}

validProperty=({name,value})=>{
if(name==='username')
{
if(value.trim()==='') return 'username is required';
}
if(name==='password')
{
  if(value.trim()==='') return 'password is required';
}


}
handleSubmit=e=>{
    e.preventDefault();
   const errors= this.validate();
   console.log(errors);
   this.setState({errors:errors || {}});
   if(errors) return;
    //server calls......
    
    console.log("Submit");
}

handleChange=({currentTarget:input})=>{

const errors={...this.state.errors};
const errorMessage=this.validProperty(input);

if (errorMessage){
  errors[input.name]=errorMessage;
}
else  
{
  delete errors[input.name];
}

  const account={...this.state.account};
  account[input.name]=input.value;
  this.setState({account,errors});
}

  render(){
   const {account,errors}=this.state;
    return ( 
      <div className="container" style={{padding:"20px"}}>
       <h1 style={{textAlign:"center"}}>Login Form</h1>
     <form onSubmit={this.handleSubmit}>
     
     
     <Input name="username" label="User Name" value={account.username} onChange={this.handleChange} error={errors.username}/>
      
     <Input name="password" label="Password" value={account.password} onChange={this.handleChange} error={errors.password}/>
      


     <button className="btn btn-primary">Login</button>
     </form>

      </div>
    
      );
}
}
export default LoginForm;

 