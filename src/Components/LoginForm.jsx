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
  username:Joi.string().required().label('User Name'),
  password:Joi.string().required().label('Password')
}



validate=()=>{ 
const option=  {abortEarly:false};
const {error}=Joi.validate(this.state.account,this.schema,option);
const errors={};
if(!error) return null;
for(let item of error.details ) errors[item.path[0]]=item.message;
return errors;
}

validProperty=({name,value})=>{

  const obj={[name]:value};
  const schema={[name]:this.schema[name]};
  const {error}=Joi.validate(obj,schema);
  return error?error.details.message:null;

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
      


     <button disabled={this.validate()} className="btn btn-primary">Login</button>
     </form>

      </div>
    
      );
}
}
export default LoginForm;

 