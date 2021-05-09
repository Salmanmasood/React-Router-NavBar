import React, { Component } from 'react';
import Joi from  'joi-browser';
import  Form  from "./Form/Form";

class RegisterForm extends  Form {

    state={
 
        data:{
          username:"",
          password:"",
          name:"",
          
        },
        errors:{}
    }
    
    schema = {
        username: Joi.string()
          .required()
          .email()
          .label("User Name"),
        password: Joi.string()
          .required()
          .min(5)
          .label("Password"),
        name: Joi.string()
          .required()
          .label("Name")
      };
    
      doSubmit=()=>{

        console.log("Submit");
        alert("SUBMIT");
          
      }

    
  render(){
    const {data,errors}=this.state;
     return ( 
       <div className="container" style={{padding:"20px"}}>
        <h1 style={{textAlign:"center"}}>Register Form</h1>
        <form onSubmit={this.handleSubmit}>
      
     
      {this.renderInput("username","Username")}
      {this.renderInput("password","Password","password")}
      {this.renderInput("name","Name")}
      
       
 
      {this.renderButton('Register!')}
    
      </form>
 
       </div>
     
       );
 }
}

export default RegisterForm;