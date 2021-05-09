import React, { Component } from 'react';
import Joi from  'joi-browser';
import  Form  from "./Form/Form";


class LoginForm extends Form {

state={
 
    data:{
      username:"",
      password:""
    },
    errors:{}
}

schema={
  username:Joi.string().required().label('User Name'),
  password:Joi.string().required().label('Password')
}





doSubmit=()=>{

  console.log("Submit");
    
}



  render(){
   const {data,errors}=this.state;
    return ( 
      <div className="container" style={{padding:"20px"}}>
       <h1 style={{textAlign:"center"}}>Login Form</h1>
       <form onSubmit={this.handleSubmit}>
     
     
     {this.renderInput("username","Username")}
     {this.renderInput("password","Password","password")}
     
      

     {this.renderButton('Login!')}
   
     </form>

      </div>
    
      );
}
}
export default LoginForm;

 